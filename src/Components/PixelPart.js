import React, { useEffect, useRef, useState } from "react";

function PixelPart(props) {
  const containerLoad = useRef(null);
  const canvasLoad = useRef(null);
  const isScrolling = useRef(false);
  const prevScrollTop = useRef(0);
  const imageParts = useRef([]);
  const imagePartOriginalPositions = useRef([]);
  const scrollSpeed = 0.05;
  const animationFrame = useRef();
  const allPartsInOriginalPosition = useRef(false);
  const [etat, setEtat] = useState(false);
  const scrollUpe = useRef();
  const [scrollDirection, setScrollDirection] = useState(null);
  const scrollTimeout = useRef();
  const [currentImage, setCurrentImage] = useState("/portfolio/prototype.webp");



  useEffect(() => {
    const container = containerLoad.current;
    const canvas = canvasLoad.current;
    const context = canvas.getContext("2d",{ willReadFrequently: true });
    const imageLarge = new Image();
    imageLarge.src = currentImage


    const handleScroll = () => {
      isScrolling.current = true;
      const currentScrollTop = window.scrollY;

      clearTimeout(scrollTimeout.current);
      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(updateImageParts);
      }

      if (currentScrollTop > prevScrollTop.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      scrollTimeout.current = setTimeout(() => {
        setScrollDirection(null);
      }, 100);
    };

    const scrollDown = (splitHeight) => {
      if (splitHeight >= canvas.height) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        imageParts.current.forEach((imagePart) => {
          if (
            imagePart.randomX === undefined ||
            imagePart.randomY === undefined
          ) {
            imagePart.randomX = Math.floor(Math.random() * canvas.width);
            imagePart.randomY = Math.floor(Math.random() * canvas.height);
          }

          const dx = imagePart.randomX - imagePart.x;
          const dy = imagePart.randomY - imagePart.y;

          imagePart.x -= dx * scrollSpeed;
          imagePart.y -= dy * scrollSpeed;

          context.putImageData(imagePart.imageData, imagePart.x, imagePart.y);
        });
      }
    };

    const scrollUpeFunc = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      let allPartsAtOriginalPosition = true;

      imageParts.current.forEach((imagePart, index) => {
        const originalX = imagePartOriginalPositions.current[index].x;
        const originalY = imagePartOriginalPositions.current[index].y;
        const dx = originalX - imagePart.x;
        const dy = originalY - imagePart.y;

        imagePart.x += Math.floor(dx) * 0.05;
        imagePart.y += Math.floor(dy) * 0.05;

        context.putImageData(imagePart.imageData, imagePart.x, imagePart.y);
        if (
          Math.abs(originalX - imagePart.x) >= 1 ||
          Math.abs(originalY - imagePart.y) >= 1
        ) {
          allPartsAtOriginalPosition = false;
        }
      });

      allPartsInOriginalPosition.current = allPartsAtOriginalPosition;
    };

    scrollUpe.current = scrollUpeFunc;

    const updateImageParts = () => {
      if (isScrolling.current && document.querySelector("#accueil")) {
        const scrollTop = window.scrollY;
        const scrollDirection =
          scrollTop > prevScrollTop.current ? "down" : "up";
        let parentHeight = document.querySelector("#accueil").offsetHeight;

        if (scrollDirection === "down" && scrollTop < parentHeight) {
          const splitHeight = Math.round(
            canvas.height *
              (scrollTop /
                (document.documentElement.scrollHeight - window.innerHeight))
          );
          scrollDown(splitHeight);
        }

        prevScrollTop.current = scrollTop;
      }

      if (!allPartsInOriginalPosition.current) {
        animationFrame.current = requestAnimationFrame(updateImageParts);
      } else {
        animationFrame.current = null;
        setEtat(false);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const imageToDraw = imageLarge;
      canvasLoad.current.style.width = "clamp(500px,100%,100%)";
      context.drawImage(imageToDraw, 0, 0, canvas.width, canvas.height);

      imageParts.current.splice(0, imageParts.current.length);
      imagePartOriginalPositions.current.splice(
        0,
        imagePartOriginalPositions.current.length
      );

      const numParts = 10;
      const partWidth = Math.floor(canvas.width / numParts) + 1;
      const partHeight = Math.floor(canvas.height / numParts) + 1;

      for (let row = 0; row < numParts; row++) {
        for (let col = 0; col < numParts; col++) {
          const x = Math.floor(col * partWidth);
          const y = Math.floor(row * partHeight);
          const imageData = context.getImageData(x, y, partWidth, partHeight);
          const imagePart = { x, y, imageData }; // Add zIndex field
          imageParts.current.push(imagePart);
          imagePartOriginalPositions.current.push({ x, y });
        }
      }

      setEtat(true);
      scrollUpeFunc();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    imageLarge.onload = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      draw();
    };

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [currentImage]);

  useEffect(() => {
    let animationId;

    if (!etat && scrollDirection !== "down") {
      const loop = () => {
        scrollUpe.current();
        if (!allPartsInOriginalPosition.current) {
          animationId = requestAnimationFrame(loop);
        }
      };
      animationId = requestAnimationFrame(loop);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [etat, scrollDirection]);



  return (
    <div ref={containerLoad} id="image-container">
      <canvas ref={canvasLoad} id="image-canvas"></canvas>
    </div>
  );
}

export default PixelPart;

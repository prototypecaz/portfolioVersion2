import React, { useRef, useEffect, useState } from "react";

const CHARS =
  "あいうえおかきくけこさしすせそたちつてとなに ねのはひふへほまみむめもやゆよらりるれろわをん".split("");
const DROPS = 60;
const DROP_MAX_LENGTH = 24;
const CHAR_MAX_LIFE = 5;
const SIZE = 10;
const DROP_SPEED = 4;

const RainMatrix = () => {
  const canvasRef = useRef(null);
  let ctx;
  let drops;

  const [isScrolling, setIsScrolling] = useState(false);
  let animationId = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d", { alpha: true });
    canvas.width = 500;
    canvas.height = window.innerHeight;
    drops = Array.from({ length: DROPS }, () => generateDrop());
    draw();

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationId = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(animationId);
        }
      });
    }, observerOptions);

    observer.observe(canvas);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  let scrollTimeout;
  const SCROLL_DELAY = 100;

  const handleScroll = () => {
    setIsScrolling(true);
    cancelAnimationFrame(animationId);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      if (canvasRef.current.getBoundingClientRect().top < window.innerHeight && canvasRef.current.getBoundingClientRect().bottom > 0) {
        animationId = requestAnimationFrame(draw);
      }
    }, SCROLL_DELAY);
  };

  const RandChar = (prevChar) => {
    if (prevChar && prevChar.ttl) {
      prevChar.ttl--;
      return prevChar;
    }
    return {
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      ttl: Math.floor(Math.random() * CHAR_MAX_LIFE),
    };
  };

  const generateDrop = (drop = {}) => {
    drop.chars = Array.from(
      { length: Math.floor(Math.random() * (DROP_MAX_LENGTH - 5) + 5) },
      () => RandChar()
    );
    drop.font = SIZE + "px monospace";
    drop.x = Math.floor(Math.random() * canvasRef.current.width);
    drop.y = Math.floor(
      Math.random() * (canvasRef.current.height * 2) -
        canvasRef.current.height * 2 -
        drop.chars.length * parseInt(drop.font, 10) -
        200
    );
    drop.timeToMove = 0;
    return drop;
  };

  const scrambleDrop = (drop) => {
    drop.chars[0] = RandChar();
    drop.chars.shift();
    drop.chars.push(RandChar());
    return drop;
  };

  const drawText = (text, x, y, fillStyle, font) => {
    ctx.fillStyle = "#32C267";
    ctx.font = font;
    ctx.fillText(text, x, y);
  };

  const draw = () => {
  
    if (!isScrolling && canvasRef.current !== null) {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      drops.forEach((drop) => {
        const fontSize = parseInt(drop.font, 10);
        drop.chars.forEach((char, k) => {
          const s = 255 * (k / DROP_MAX_LENGTH);
          drawText(
            char.char,
            drop.x,
            drop.y + k * fontSize,
            `rgb(${s},${s},${s})`,
            drop.font
          );
        });
        drop.timeToMove--;
        if (drop.timeToMove <= 0) {
          scrambleDrop(drop);
          drop.y += fontSize;
          drop.timeToMove = DROP_SPEED;
        }
        drop.y >= canvasRef.current.height && generateDrop(drop);
      });
      animationId = requestAnimationFrame(draw);
    }
  };

  return (
    <div id="containerMatrix">
      <canvas id="canvasMatrix" ref={canvasRef}></canvas>
    </div>
  );
};

export default RainMatrix;

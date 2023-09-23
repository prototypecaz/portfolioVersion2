import React, { useEffect, useRef } from "react";

const Matrix = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    var c = canvasRef.current;
    var ctx = c.getContext("2d");

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    ctx.fillStyle = "rgb(0, 0, 30)";

    var payload =
      "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    let chinese = payload.split("");

    var font_size = 25;
    var columns = c.width / font_size;
    var drops = [];
    for (var x = 0; x < columns; x++) drops[x] = 1;

    let lastDrawTime = 0; // temps de la dernière image
    let speed = 1; // vitesse de l'animation, 1 est la vitesse par défaut

    function draw(currentTime) {
      // Pour la première frame, on initialise lastDrawTime
      if (!lastDrawTime) {
        lastDrawTime = currentTime;
        return;
      }

      // Calcul du délai écoulé depuis le dernier dessin
      const elapsed = currentTime - lastDrawTime;

      // Si le délai écoulé est inférieur à ce qu'on veut (ici 120ms/speed), on ne fait rien
      // Notez que plus la valeur de "speed" est élevée, plus l'animation sera rapide
      if (elapsed < 120 / speed) return;

      // Si on arrive ici, on peut dessiner une nouvelle frame
      // fade out old drawings
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, c.width, c.height);

      // set compositing back to default
      ctx.globalCompositeOperation = "source-over";

      let rn = Math.floor(Math.random() * 255);
      ctx.fillStyle = "#32C267";

      ctx.font = font_size + "px sans-serif";
      for (var i = 0; i < drops.length; i++) {
        var text = payload[Math.floor(Math.random() * payload.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
        //incrementing Y coordinate
        drops[i] += speed;
      }

      // On met à jour le temps de la dernière frame
      lastDrawTime = currentTime;
    }

    // On lance la boucle d'animation
    requestAnimationFrame(draw);
  }, []);

  return (
    <div id="containerMatrix">
      <canvas id="canvasMatrix" ref={canvasRef}></canvas>
    </div>
  );
};

export default Matrix;

import React, { useEffect, useState } from "react";

function ChargementSitee() {
    const [progress, setProgress] = useState(0);
    const canvasRef = React.createRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const squareSize = 20;
        const numSquaresX = canvas.width / squareSize;
        const numSquaresY = canvas.height / squareSize;

        ctx.lineWidth = 1;          
        ctx.fillStyle = 'white';

        let squaresList = [];
        for (let x = 0; x < numSquaresX; x++) {
            for (let y = 0; y < numSquaresY; y++) {
                squaresList.push([x * squareSize, y * squareSize]);
                ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
            }
        }

        // Tri des carrés par ordre diagonal
        squaresList.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

        let idx = 0;
        const squaresPerIteration = 50;

        function animate() {
            for (let i = 0; i < squaresPerIteration && idx < squaresList.length; i++) {
                const [x, y] = squaresList[idx];
                ctx.clearRect(x, y, squareSize, squareSize);
                idx++;
            }

            if (idx < squaresList.length) {
                setTimeout(animate, 1);
            } else {
                document.body.style.overflow = "auto";
                canvasRef.current.style.display = "none";
            }
        }

        if (progress >= 100) {
            setTimeout(() => {
              animate();
            }, 250);
        }
    }, [progress]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        function drawProgressText() {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, canvas.height / 2 - 25, canvas.width, 30);

            var text = progress + '%';
            ctx.font = '5rem sans-serif';
            ctx.fillStyle = 'black';

            var textWidth = ctx.measureText(text).width;
            var x = (canvas.width - textWidth) / 2;
            var y = canvas.height / 2;

            ctx.fillText(text, x, y);
        }

        drawProgressText();

    }, [progress]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 4);
            } else {
                clearInterval(interval);
            }
        }, 1);

        return () => clearInterval(interval); // Nettoyez l'intervalle lors du démontage

    }, [progress]);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", top: 0, zIndex: 1, width: '100%', height: '100%', color: 'black' }}
        ></canvas>
    );
}

export default ChargementSitee;

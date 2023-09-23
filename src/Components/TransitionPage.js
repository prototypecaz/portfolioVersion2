import React, { useEffect } from "react";

function TransitionPage({ transitionPage, nameTransition }) {
  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const cellSize = 50;
    let cellsToFill = [];
    let cellsToClear = [];

    function clearSquare(col, row) {
      ctx.clearRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    }

    function fillSquare(col, row, color) {
      ctx.fillStyle = color;
      ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }

    function drawGrid() {
      const numCellsX = canvas.width / cellSize;
      const numCellsY = canvas.height / cellSize;

      for (let i = 0; i <= numCellsX; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
      }

      for (let j = 0; j <= numCellsY; j++) {
        ctx.moveTo(0, j * cellSize);
        ctx.lineTo(canvas.width, j * cellSize);
      }
    }

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // Tant qu'il reste des éléments à mélanger...
      while (currentIndex !== 0) {
        // Choisir un élément restant...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Et échanger avec l'élément actuel.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    function initCells() {
      const numCellsX = canvas.width / cellSize;
      const numCellsY = canvas.height / cellSize;

      for (let x = 0; x < numCellsX; x++) {
        for (let y = 0; y < numCellsY; y++) {
          cellsToFill.push({ x, y });
        }
      }

      // Mélangeons les cellules pour un effet plus aléatoire
      cellsToFill = shuffle(cellsToFill);
    }

    function animateFilling() {
      if (cellsToFill.length > 0) {
        for (let i = 0; i <= 10; i++) {
          if (cellsToFill.length === 0) {

            console.log('ok')
            window.location.hash = "";
            window.location.hash = nameTransition;

            break;
          }

          const cell = cellsToFill.pop();
          fillSquare(cell.x, cell.y, "white");
        }
      } else if (cellsToClear.length > 0) {
        for (let i = 0; i <= 10; i++) {
          if (cellsToClear.length === 0) break;

          const cell = cellsToClear.pop();
          clearSquare(cell.x, cell.y);
        }
      } else {
        let containeBurger = document.querySelector("#containerBurger");
        let rowBurger = document.querySelectorAll(".rowBurger");

        rowBurger.forEach((element) => {
          element.classList = "rowBurger";
        });
        containeBurger.classList.remove("expanded");
        transitionPage(false);
        return; // Tous les carrés ont été traités
      }

      requestAnimationFrame(animateFilling);
    }

    function startFillingAnimation() {
      initCells();
      cellsToClear = [...cellsToFill]; // Copier la liste
      animateFilling();
    }

    // Initialiser le canvas et le redimensionner lors de la modification de la taille de la fenêtre
    resizeCanvas();

    // Démarrer l'animation après un court délai pour voir la grille avant que l'animation ne commence
    setTimeout(startFillingAnimation, 10);
  }, []);

  return (
    <canvas
      id="myCanvas"
      style={{ position: "fixed", top: 0, zIndex: 5,width:'100%' }}
    ></canvas>
  );
}

export default TransitionPage;

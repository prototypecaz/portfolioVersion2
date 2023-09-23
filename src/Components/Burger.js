import React, { useState } from "react";
import RowBurger from "./RowBurger";

function Burger({ colorBurger, setClique, clique }) {
  const handleClic = () => {
    let containeBurger = document.querySelector("#containerBurger");

    containeBurger.style.willChange = "clip-path";
    containeBurger.classList.toggle("expanded");

    setClique(!clique);
  };

  return (
    <div onClick={handleClic} id="burger">
      <RowBurger
        clique={clique}
        colorBurger={colorBurger}
        nameClass="firstRow"
      />
      <RowBurger
        clique={clique}
        colorBurger={colorBurger}
        nameClass="secondRow"
      />
      <RowBurger
        clique={clique}
        colorBurger={colorBurger}
        nameClass="thirdRow"
      />
    </div>
  );
}

export default Burger;

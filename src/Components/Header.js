import React, { useEffect, useRef } from "react";
import Burger from "./Burger";
import MenuBurger from "./MenuBurger";

function Header({ colorLogo, setClique, clique }) {
  return (
    <header style={{ position: "relative" }}>
      <div>
        <span id="logo" style={{ color: colorLogo }}>
          GC
        </span>
      </div>

      <Burger clique={clique} setClique={setClique} colorBurger={colorLogo} />
    </header>
  );
}

export default Header;

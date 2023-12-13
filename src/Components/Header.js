import React, { useEffect, useRef } from "react";
import Burger from "./Burger";
import MenuBurger from "./MenuBurger";

function Header({ colorLogo, setClique, clique }) {
  return (
    <header style={{ position: "relative" }}>


      <div style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}>
      <div>
        <span id="logo" style={{ color: colorLogo }}>
          GC
        </span>
      </div>

      <Burger clique={clique} setClique={setClique} colorBurger={colorLogo} />
      </div>
      
      <div style={{border:'1px solid #b0b0b0',padding:'0 45%',marginTop:'1rem'}}></div>
    </header>
  );
}

export default Header;

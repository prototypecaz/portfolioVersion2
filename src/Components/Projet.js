import React, { useCallback, useEffect } from "react";
import Techno from "./Techno";

function Projet({
  titreProjet,
  sousTitre,
  motsTechno,
  dive,
  id,
  blocProjet,
  lien,
  setImg
}) {

 /* useEffect(() => {
    if (!blocProjet || window.innerWidth < 1024) return;

    const updateDivePosition = (e) => {
      const rect = blocProjet.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      dive.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const handleMouseEnter = (e) => {
      updateDivePosition(e);
      dive.current.style.display = "block";
      dive.current.style.transformOrigin = "center center";
    };

    const handleMouseMove = (e) => {
      updateDivePosition(e);
    };

    const handleMouseLeave = () => {
      dive.current.style.display = "none";
      dive.current.style.transform = `translate(0px, 0px)`;
    };

    blocProjet.addEventListener("mouseenter", handleMouseEnter);
    blocProjet.addEventListener("mousemove", handleMouseMove);
    blocProjet.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      blocProjet.removeEventListener("mouseenter", handleMouseEnter);
      blocProjet.removeEventListener("mousemove", handleMouseMove);
      blocProjet.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [blocProjet, dive]);*/


  const handleOver = useCallback((e) => {
  
    if (window.innerWidth >= 1280) {
      setImg(id);
      console.log(id);
    }
  }, [id, setImg]);

  return (
    <a
      href={lien}
      target='_blank'
      rel="noopener noreferrer"
      onMouseEnter={handleOver}
      style={{ color: 'white', textDecoration: 'none' }}
    >
      <div className="projets">
        <div className="sousTitreProjet">
          <p>{titreProjet}</p>
          <span>{sousTitre}</span>
        </div>
        <div className="sousTitreProjet2">
          {motsTechno.map((mot, index) => (
            <Techno mots={mot} key={mot + "-" + index} />
          ))}
        </div>
      </div>
      <div
        className="hoverProject"
        style={{ width: "100%", height: "0.05rem", transform: "scaleX(1)" }}
      ></div>
    </a>
  );
}

export default Projet;

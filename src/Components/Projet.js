import React, { useEffect, useRef } from "react";
import Techno from "./Techno";

function Projet({
  titreProjet,
  sousTitre,
  motsTechno,
  dive,
  handleOver,
  blocProjet,
  lien
}) {

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      let animationFrameId;

      const handleMouseEnter = (e) => {
        var rect = blocProjet.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        dive.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        dive.current.style.display = "block";
        dive.current.style.transformOrigin = "center center";
      };

      const handleMouseMove = (e) => {
        cancelAnimationFrame(animationFrameId);  // Annuler le précédent frame si existant

        animationFrameId = requestAnimationFrame(() => {
          var rect = blocProjet.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          dive.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });
      };

      const handleMouseLeave = () => {
        dive.current.style.display = "none";
        dive.current.style.transform = `translate(0px, 0px)`;
      };

      blocProjet.addEventListener("mouseenter", handleMouseEnter);
      blocProjet.addEventListener("mousemove", handleMouseMove);
      blocProjet.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationFrameId);  // Assurez-vous d'annuler le dernier frame
        blocProjet.removeEventListener("mouseenter", handleMouseEnter);
        blocProjet.removeEventListener("mousemove", handleMouseMove);
        blocProjet.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <a
      href={lien}
      target='_blank'
      onMouseEnter={(e) => handleOver(e)}
      style={{color:'white',textDecoration:'none'}}
    >
      <div className="projets">
        <div className="sousTitreProjet">
          <p>{titreProjet}</p>
          <span>{sousTitre}</span>
        </div>
        <div className="sousTitreProjet2">
          {motsTechno.map((x, i) => (
            <Techno mots={x} key={i}/>
          ))}
        </div>
      </div>
      <div
        className="hoverProject"
        style={{ width: "100%", height: "0.05rem", transform: "scaleX(1)"}}
      ></div>
    </a>
  );
}

export default Projet;

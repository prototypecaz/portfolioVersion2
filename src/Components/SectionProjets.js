import React, { useEffect, useRef, useState } from "react";
import TextTime from "./TextTime";
import Projet from "./Projet";

const projets = [
  {
    titreProjet: "Facebook",
    sousTitre: "Implémentation de 10 fonctionnalités de Facebook.",
    motsTechno: ["php", "react"],
    image: "/portfolio/images/facebookCreatifMin.webp",
    lien:'https://github.com/prototypecaz/failbook'
  },
  {
    titreProjet: "Acces Heure",
    sousTitre:
      "Création d'une plateforme web pour la comptabilisation des heures travaillées dans une société.",
    motsTechno: ["javascript", "php", "html", "css"],
    image: "/portfolio/images/accesHeureMin.webp",
    lien:'https://github.com/prototypecaz/AccesHeure'
  },

  {
    titreProjet: "Travaux",
    sousTitre:
      "Création d'une plateforme web pour connecter les utilisateurs aux artisans locaux à proximité.",
    motsTechno: ["javascript", "php", "html", "css"],
    image: "/portfolio/images/travauxMin.webp",
    lien:'https://github.com/prototypecaz/Artisan'
  },
  {
    titreProjet: "Riva",
    sousTitre: "Site E-commerce pour des vetements.",
    motsTechno: ["javascript"],
    image: "/portfolio/images/rivaMin.webp", //"images/instagram.png"
    lien:'https://github.com/prototypecaz/Riva'
  },
];

function SectionProjets(props) {
  const divVerte = useRef();
  const blocProjet = useRef(null);
  const [index, setIndex] = useState();
  const [img, setImg] = useState(0);

  const [isBlocProjetDefined, setIsBlocProjetDefined] = useState(false);

  useEffect(() => {
    if (blocProjet.current) {
      setIsBlocProjetDefined(true);
      }
  }, []);

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      if (divVerte.current && blocProjet.current) {
        const rect = blocProjet.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        divVerte.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      console.log('teste')
    });
  };

  const handleMouseEnter = (e) => {
    divVerte.current.style.display = "block";

    const rect = blocProjet.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    divVerte.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }


  const handleMouseLeave = (e) => {
    divVerte.current.style.display = "none";
  }

console.log(img)
  return (
    <div id="sectionProjets" >
      <TextTime/>

      <div id="blocProjets" ref={blocProjet} style={{ position: "relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        {isBlocProjetDefined &&
          projets.map((x, i) => (
            <Projet
              key={i}
              id={i}
              blocProjet={blocProjet.current}
              setIndex={setIndex}
             setImg = {setImg} 
              dive={divVerte}
              titreProjet={x.titreProjet}
              sousTitre={x.sousTitre}
              motsTechno={x.motsTechno}
              image={x.image}
              lien={x.lien}
            />
          ))}
        <div ref={divVerte} className="teste">
          <img
            className="imageProjet"
            style={{ borderRadius: "0.5rem", width: "22rem", height: "12rem" }}
            src={ projets[img].image }
          />
        </div>
      </div>
    </div>
  );
}

export default SectionProjets;

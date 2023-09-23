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
  const [img, setImg] = useState();

  const [isBlocProjetDefined, setIsBlocProjetDefined] = useState(false);

  useEffect(() => {
    if (blocProjet.current) {
      setIsBlocProjetDefined(true);
    }
  }, []);

  const handleOver = (e) => {
    if (window.innerWidth >= 1280) {
      let node = blocProjet.current.childNodes;
      const index = [...node].indexOf(e.currentTarget);

      // Utilisez l'image préchargée.
      setImg(projets[index].image);
    }
  };

  return (
    <div id="sectionProjets">
      <TextTime mots="Projets || Work" />

      <div id="blocProjets" ref={blocProjet} style={{ position: "relative" }}>
        {isBlocProjetDefined &&
          projets.map((x, i) => (
            <Projet
              key={i}
              blocProjet={blocProjet.current}
              setIndex={setIndex}
              handleOver={handleOver}
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
            src={img}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionProjets;

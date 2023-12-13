import { useState, useRef } from "react";

import InformationContact from "./InformationContact";
import { useInView } from "react-intersection-observer";

export default function SectionContact() {
  const form = useRef();
  const envoie = useRef();
  const blocRond = useRef();
  const blocSuccess = useRef();


  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [inputValue, setInputValue] = useState({
    nom: "",
    prenom: "",
    objet: "",
    message: "",
  });

 

  const handleClick = (e) => {
    e.preventDefault();

    Object.entries(inputValue).forEach(([key, value]) => {
      let element = document.querySelector("#" + key);
      if (value == "") {
        element.style.border = "1px solid #dd2d4a";
      } else {
        if (key == "message") {
          element.style.border = "1px solid white";
        } else {
          element.style.border = "none";
          element.style.borderBottom = "1px solid white";
        }
      }
    });

    const allFieldsFilled = Object.values(inputValue).every(
      (value) => value !== ""
    );

    if (allFieldsFilled) {
      blocRond.current.style.display = "flex";
      envoie.current.style.display = "none";
      fetch(
        "http://www.guillaume.com/portfolio/public/mail.php?nom=" +
          inputValue.nom +
          "&prenom=" +
          inputValue.prenom +
          "&objet=" +
          inputValue.objet +
          "&message=" +
          inputValue.message
      )
        // Quand on recoit une réponse
        .then(function (response) {
          response.text().then(function (rep) {
            if (rep == "success") {
              blocRond.current.style.display = "none";
              envoie.current.style.display = "block";
              blocSuccess.current.textContent =
                "Votre message à bien était envoyer";
              blocSuccess.current.animate(
                [
                  // keyframes
                  // keyframes
                  { transform: "translateY(0px)", offset: 0.2 }, // Départ
                  { transform: "translateY(-40px)", offset: 0.3 }, // Montée
                  { transform: "translateY(-40px)", offset: 0.8 }, // Pause pendant 5s
                  { transform: "translateY(100px)", offset: 1 },
                ],
                {
                  // timing options
                  duration: 5000,
                }
              );
            } else {
              blocRond.current.style.display = "none";
              envoie.current.style.display = "block";

              blocSuccess.current.textContent = "Une erreur est survenue";
              blocSuccess.current.animate(
                [
                  // keyframes
                  // keyframes
                  { transform: "translateY(0px)", offset: 0.2 }, // Départ
                  { transform: "translateY(-40px)", offset: 0.3 }, // Montée
                  { transform: "translateY(-40px)", offset: 0.8 }, // Pause pendant 5s
                  { transform: "translateY(100px)", offset: 1 },
                ],
                {
                  // timing options
                  duration: 5000,
                }
              );
            }
          });
        });
    }
  };

  const handleChange = (e) => {
    let key = e.target.id;
    setInputValue((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };

  return (
    <>
      <div ref={ref} id="sectionContact">
        <div ref={blocSuccess} className="blocSuccess">
          <p>Votre message a bien était envoyer</p>
        </div>

     

        <div className="blocGaucheContact">
          <form ref={form}>
            <div>
              <input
                id="nom"
                onChange={handleChange}
                className="inputContact"
                value={inputValue.nom}
                type="text"
                placeholder="Nom"
              />
              <input
                id="prenom"
                onChange={handleChange}
                className="inputContact"
                value={inputValue.prenom}
                type="text"
                placeholder="Prenom"
              />
            </div>
            <input
              id="objet"
              onChange={handleChange}
              type="text"
              className="inputContact inputContactObjet"
              value={inputValue.objet}
              placeholder="Objet"
            />

            <textarea
              id="message"
              onChange={handleChange}
              value={inputValue.message}
              placeholder="Votre message ..."
            ></textarea>

            <button className="btnForm" type="submit" onClick={handleClick}>
              <span ref={envoie}>Envoyer</span>
              <div ref={blocRond} className="blocRond" style={{ gap: "2px" }}>
                <div className="rond"></div>
                <div className="rond"></div>
                <div className="rond"></div>
              </div>
            </button>
          </form>
        </div>

        <div className="blocInfoMob">
          <InformationContact
            text="guillaume.cazes21@gmail.com"
            icone="enveloppe.png"
          />
          <InformationContact text="06 89 76 62 44" icone="phone.png" />
        </div>

        <div className="blocDroitContact">
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                fontSize: "5vw",
              }}
            >
              <p className="contactMe" style={{ margin: 0 }}>
                Contactez
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "0.6rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    width: "16.5vw",
                    height: "0.3rem",
                    marginRight: "0.7rem",
                    marginTop: "0.5vw",
                  }}
                ></div>
                <span className="contactMe">Moi</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                marginTop: "1rem",
              }}
            >
              <InformationContact
                text="guillaume.cazes21@gmail.com"
                icone="enveloppe.webp"
              />
              <InformationContact text="06 89 76 62 44" icone="phone.webp" />
            </div>
          </div>
        </div>

        <img src="/portfolio/images/moonMin.webp" className={`moonMan ${inView ? 'starVisible' : 'starHidden'}`} />
      </div>
    </>
  );
}



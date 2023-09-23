import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function TextTime({ mots }) {
  const texte = document.querySelectorAll("span");
  let tableauAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  let boucle = 0;
  var mot = mots.split("");
  const divRef = useRef();
  const [spane, setSpane] = useState([]);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
  });

  const combinedRef = mergeRefs([divRef, inViewRef]);

  function mergeRefs(refs) {
    return (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref !== null) {
          ref.current = node;
        }
      });
    };
  }

  function time() {
    if (boucle < 8 && spane !== []) {
      setTimeout(() => {
        boucle++;

        spane.forEach((element, index) => {
          if (index !== 7 && index !== 10) {
            element.textContent =
              tableauAlphabet[
                Math.floor(Math.random() * tableauAlphabet.length)
              ];
          }
        });

        time();
      }, 30);
    } else {
      spane.forEach((element, index) => {
        element.textContent = mot[index];
        boucle = 0;
      });
    }
  }

  useEffect(() => {
    const spaneCopy = [];

    divRef.current.innerHTML = ""; // Clear the div

    for (var i = 0; i < mot.length; i++) {
      let span = document.createElement("span");
      span.textContent = mots[i];
      spaneCopy.push(span);
      divRef.current.appendChild(span);
    }

    setSpane(spaneCopy);
  }, []);

  useEffect(() => {
    if (inView) {
      time();
    }
  }, [inView]);

  return (
    <div id="titreProjet" ref={combinedRef} style={{ color: "white" }}></div>
  );
}

export default TextTime;

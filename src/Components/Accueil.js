import React, { useEffect, useRef, useState, Suspense } from "react";
import Header from "./Header";
import PixelPart from "./PixelPart";
import RainMatrix from "./RainMatrix";
import { useInView } from "react-intersection-observer";

const MenuBurger = React.lazy(() => import("./MenuBurger"));

function Accueil({ transitionPage }) {
  const accueil = useRef(null);
  const sousAccueil = useRef(null);
  const [mobile, setMobile] = useState();
 
  const [clique, setClique] = useState(false);

  const [inViewRef, inView] = useInView({
threshold: 0,
  });


  const resize = ()=>{
    window.innerWidth <= 899.99 ? setMobile(false) : setMobile(true);
  }

  useEffect(() => {
    
    resize();
   

    const scrollHandler = (e) => {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let degre = Math.floor(scrollPosition / 20) * 0.7;

      if (sousAccueil.current && degre <= 40) {
        sousAccueil.current.style.transform = `perspective(1500px) rotate3d(0, 1, 0, ${degre}deg) translate3d(0, ${
          -degre * 2
        }px, 0)`;
      }
    };

  
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener('resize', resize)
   
    // Clean up the effect on unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  console.log(mobile)

  return (
    <div ref={accueil} id="accueil">
      <div ref={sousAccueil} id="sousAccueil">
        <Header colorLogo="black" clique={clique} setClique={setClique} />
        <div id="sousHeader">
          <div
          className="blocParentTitre"

          >
            <div className="blocTitre">
              <div>
                <h1 id="titreAccueil">
                  Developpeur Web <br /> et Web Mobile
                </h1>
              </div>
              <div>
                <svg id="arrowBottom" viewBox="0 0 92 92">
                  <path d="M73.8 57.9l-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div ref={inViewRef} className="blocPhoto" >
            
              {mobile && <PixelPart />}
             
             <RainMatrix view={inView} />
          </div>
        </div>
        <Suspense fallback={<div>Chargement de la section...</div>}>
          <MenuBurger transitionPage={transitionPage} setClique={setClique} />
        </Suspense>
      </div>
    </div>
  );
}

export default Accueil;

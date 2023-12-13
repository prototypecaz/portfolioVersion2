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

 

  return (
    <div ref={accueil} style={{height: '100vh',backgroundColor:'black'}}>

    <div  ref={sousAccueil} style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: 'radial-gradient(circle at 75% 55%,white , #d9d9d9,#d9d9d9)'}}>
    <Header colorLogo="black" clique={clique} setClique={setClique} />
   
   <div id='accueil'>

     <div>
       <div>
 
         <div className="blocNameAccueil">
           <span>GUILLAUME CAZES</span>
           <div><span>29</span></div>
         </div>
 
         <div className="blocBtnAccueil">
           <button onClick={() => transitionPage('sectionModal')}>A propos</button>
           <button onClick={() => transitionPage('sectionProjets')}>Projets</button>
         </div>
       </div>
       
       <div className="blocArrowAccueil">
         <div>
           <div></div>
           <div></div>
         </div>
       </div>
           
       <div className="blocTitleAccueil">
         <h1><span>Développeur Web</span><br/><span>& WEB MOBILE</span></h1>
         <div className="blocCadreAccueil">& wEBSiTE</div>
       </div>
     </div>

     <div>

        <PixelPart/>
         {/*<div className="blocCadreAccueil">
             & wEBSiTE
  </div>*/}
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

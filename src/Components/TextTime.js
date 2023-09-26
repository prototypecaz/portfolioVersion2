import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import LetterTime from "./LetterTime";

function TextTime() {
  
  const [inViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce:true
  });

  return (
    <div id="titreProjet" ref={inViewRef}  style={{ color: "white" }}>
      <LetterTime letters={'p'} visible={inView}/>
      <LetterTime letters={'r'} visible={inView}/>
      <LetterTime letters={'o'} visible={inView}/>
      <LetterTime letters={'j'} visible={inView}/>
      <LetterTime letters={'e'} visible={inView}/>
      <LetterTime letters={'t'} visible={inView}/>
      <LetterTime letters={'s '} visible={inView}/>
      <LetterTime letters={'|'} visible={inView}/>
      <LetterTime letters={'|'} visible={inView}/>
      <LetterTime letters={' w'} visible={inView}/>
      <LetterTime letters={'o'} visible={inView}/>
      <LetterTime letters={'r'} visible={inView}/>
      <LetterTime letters={'k'} visible={inView}/>
      <LetterTime letters={'s'} visible={inView}/>

    </div>
  );
}

export default TextTime;

import React, { useEffect, useRef } from "react";
import TransitionPage from "./TransitionPage";
import Header from "./Header";
import MenuBurger from "./MenuBurger";

function NextPage(props) {
  const baliseRef = useRef();

  useEffect(() => {
    if (baliseRef.current) {
      let texte =
        "In this example, we'll draw a background of four different colored squares. On top of these, we'll draw a set of semi-transparent circles. The globalAlpha property is set at 0.2 which will be used for all shapes from that point on. Every step in the for loop draws a set of circles with an increasing radius. The final result is a radial gradient. By overlaying ever more circles on top of each other, we effectively reduce the transparency of the circles that have already been drawn. By increasing the step count and in effect drawing more circles, the background would completely disappear from the center of the image.";

      let index = 0;

      let interval = setInterval(() => {
        if (index >= texte.length) {
          clearInterval(interval);
        } else {
          baliseRef.current.textContent += texte[index];
          index++;
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <TransitionPage full={false} />

      <div>
        <Header colorLogo="white" />
        <MenuBurger />
        <div>
          <p
            ref={baliseRef}
            style={{
              color: "white",
              width: "50%",
              textAlign: "center",
              margin: "auto",
            }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default NextPage;

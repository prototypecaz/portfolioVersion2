import React, { useEffect, useState } from "react";

function ChargementSite() {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const circle = document.querySelector(".circle");
    const circumference = 2 * Math.PI * circle.r.baseVal.value;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `0`;

    const animeCircle = circle.animate(
      [{ strokeDashoffset: `0` }, { strokeDashoffset: `${circumference}` }],
      {
        delay: 1000,
        duration: 1000,
        fill: "forwards",
      }
    );

    animeCircle.onfinish = () => {
      const bloc1 = document.querySelector(".blocChargement1");
      const animeBloc1 = bloc1.animate(
        [
          { transform: "translate3d(0,0,0)" },
          { transform: "translate3d(0,-100%,0)" },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );

      const bloc2 = document.querySelector(".blocChargement2");
      const animeBloc2 = bloc2.animate(
        [
          { transform: "translate3d(0,0,0)" },
          { transform: "translate3d(0,100%,0)" },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );

      animeBloc2.onfinish = () => {
        document.body.style.overflow = "auto";
        setIsAnimationFinished(true);
      };
    };

    return () => {
      animeCircle.cancel();
    };
  }, []);

  return (
    !isAnimationFinished && (
      <div
        style={{
          position: "fixed",
          top: 0,
          display: "flex",
          width: "100%",
          height: "100vh",
          zIndex: 3,
        }}
      >
        <div
          className="blocChargement1"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <span className="letterLoad1">G</span>
        </div>
        <div
          className="blocChargement2"
          style={{ transform: "translate3d(0)" }}
        >
          <span className="letterLoad2">C</span>
        </div>
        <div
          style={{
            position: "absolute",
            width: "30vw",
            height: "30vw",
            top: 0,
            bottom: 0,
            margin: "auto",
            left: 0,
            right: 0,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              className="circle"
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    )
  );
}

export default ChargementSite;

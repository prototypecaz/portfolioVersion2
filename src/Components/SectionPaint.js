import React from "react";

function SectionPaint(props) {
  let animationCompleted = false;

  window.addEventListener("scroll", () => {
    const paths = document.querySelectorAll(".st0");
    const containerSvg = document.querySelector("#containerSvg");
    const containerTop =
      containerSvg.getBoundingClientRect().top + window.scrollY;
    const containerBottom =
      containerSvg.getBoundingClientRect().bottom + window.scrollY;
    const containerHeight = containerSvg.getBoundingClientRect().height;

    const offset = 800; // Adjust this value to control when the animation starts

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;

      const scrollPos = window.scrollY;

      if (scrollPos > containerTop - offset && scrollPos < containerBottom) {
        const effectiveContainerHeight =
          containerHeight - window.innerHeight + offset;
        const scrollPercent =
          (scrollPos - containerTop + offset) / effectiveContainerHeight;
        const drawLength = scrollPercent * length;

        path.style.strokeDashoffset = length - drawLength;
      }
      if (scrollPos >= containerBottom - offset - 150) {
        path.style.strokeDashoffset = 0;
        //animationCompleted = true;
      }
    });
  });

  return (
    <div
      id="containerSvg"
      style={{
        height: "1000px",
        position: "relative",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      <svg
        style={{ width: "400px", textAlign: "center" }}
        version="1.1"
        className="circuit-no-fill"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 196.3 457.3"
        xmlSpace="preserve"
      >
        <g
          id="circuit-left"
          transform="translate(92.128906, 524.812500)"
          style={{ width: "500px" }}
        >
          <path
            className="st0"
            d="M-49.2-434.4c0,2.3,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1c0-1.8-1.2-3.3-2.8-3.9v-24.2l-13.8-13.8v-23
          c1.6-0.6,2.8-2.1,2.8-3.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1c0,1.8,1.2,3.3,2.8,3.9v24.2l13.8,13.8v23.1
          C-48.1-437.7-49.2-436.2-49.2-434.4"
          />
          <path
            className="st0"
            d="M-57.7-109.3v-339.6l-13.5-13.7V-490l-11.2-11.4c0.3-0.5,0.4-1.1,0.4-1.8c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1
          c0,2.3,1.8,4.1,4,4.1c0.6,0,1.2-0.2,1.7-0.4l10.4,10.6v27.4l13.5,13.7v338.5c-1.6,0.6-2.7,2.1-2.7,3.9c0,2.3,1.8,4.1,4,4.1
          s4-1.8,4-4.1C-55-107.2-56.1-108.7-57.7-109.3"
          />
          <path
            className="st0"
            d="M-15.8-472.3c1.6-0.6,2.8-2.1,2.8-3.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1c0,1.8,1.2,3.3,2.8,3.9v159.7
          L-29-302c-0.5-0.3-1.1-0.4-1.8-0.4c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1c0-0.6-0.2-1.2-0.4-1.8l11.4-11.4
          v-160.8H-15.8z"
          />
          <path
            className="st0"
            d="M0-270.2c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1c0,1.8,1.1,3.3,2.7,3.8v33.2c-1.5,0.6-2.7,2.1-2.7,3.8
          c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1c0-1.8-1.1-3.3-2.7-3.8v-33.2C-1.1-266.9,0-268.4,0-270.2"
          />
          <path
            className="st0"
            d="M-14-256.2c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1c0,1.8,1.1,3.3,2.7,3.9v116c-1.5,0.6-2.7,2.1-2.7,3.9
          c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1c0-1.8-1.1-3.3-2.7-3.9v-116C-15.1-252.9-14-254.4-14-256.2"
          />
          <path
            className="st0"
            d="M-29.6-178.3V-270l26.9-27.5v-188.8c1.6-0.6,2.7-2.1,2.7-3.9c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1
          c0,1.8,1.1,3.3,2.7,3.9v187.8L-32.2-271v92.8c-1.6,0.6-2.7,2.1-2.7,3.9c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1
          C-26.9-176.2-28.1-177.7-29.6-178.3"
          />
          <path
            className="st0"
            d="M-68-435.2c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1c0,1.8,1.1,3.3,2.7,3.9v116c-1.5,0.6-2.7,2.1-2.7,3.9
          c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1c0-1.8-1.1-3.3-2.7-3.9v-116C-69.1-431.9-68-433.4-68-435.2"
          />
          <path
            className="st0"
            d="M-35-325.4c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1c0-1.8-1.1-3.3-2.7-3.9v-61c1.5-0.6,2.7-2.1,2.7-3.9
          c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1c0,1.8,1.1,3.3,2.7,3.9v61C-33.9-328.7-35-327.2-35-325.4"
          />
          <path
            className="st0"
            d="M-43.6-82.3V-407l13.5-13.7v-68.6l13.5-13.7v-10.3c1.6-0.6,2.7-2.1,2.7-3.9c0-2.3-1.8-4.1-4-4.1s-4,1.8-4,4.1
          c0,1.8,1.1,3.3,2.7,3.9v9.3l-13.6,13.7v68.6L-46.3-408v325.7c-1.6,0.6-2.7,2.1-2.7,3.9c0,2.3,1.8,4.1,4,4.1s4-1.8,4-4.1
          C-40.9-80.2-42.1-81.7-43.6-82.3"
          />
        </g>
      </svg>
    </div>
  );
}

export default SectionPaint;

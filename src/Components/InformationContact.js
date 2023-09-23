import React from "react";

function InformationContact({ text, icone }) {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.3rem",
      }}
    >
      <p
        className="textContact"
        style={{ marginRight: "0.4rem", fontWeight: "bold" }}
      >
        {text}
      </p>
      <img
        style={{ width: "1.5rem", position: "relative", zIndex: 5 }}
        src={"/portfolio/images/" + icone}
      />
    </div>
  );
}

export default InformationContact;

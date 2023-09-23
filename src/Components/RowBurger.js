import React, { useEffect, useRef } from "react";

function RowBurger({ clique, nameClass, colorBurger }) {
  const ref = useRef(null);

  useEffect(() => {
    clique
      ? ref.current.classList.add(nameClass)
      : ref.current.classList.remove(nameClass);
  }, [clique]);

  return (
    <div
      ref={ref}
      className="rowBurger"
      style={{ backgroundColor: colorBurger }}
    ></div>
  );
}

export default RowBurger;

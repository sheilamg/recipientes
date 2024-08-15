import React, { useState } from "react";
import "./vaso.css";

const Vaso = () => {
  const [cantidad, setCantidad] = useState(0);
  //usar un contador para diferenciar cada div? asignarle un numero a cada div?
  const handleRellenar = () => {
    setCantidad((prev) => (prev < 100 ? prev + 25 : 100));
  };

  const handleVaciado = () => {
    setCantidad(0);
  };

  return (
    <>
      <div className="vaso-2l">
        <div className="medida-250" style={{ height: `${cantidad}%` }}>
          Agua 250
        </div>
        {/*<div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>
        <div className="medida-250">Agua 250</div>*/}
      </div>
      <button className="vaciar" onClick={handleVaciado}>
        Vaciar recipiente
      </button>
      <button className="rellenar" onClick={handleRellenar}>
        Rellenar recipiente
      </button>
    </>
  );
};

export default Vaso;

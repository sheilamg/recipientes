import React, { useState } from "react";
import "./vasomarcas.css";

const VasoMarcas = ({ maximaCapacidad }) => {
  const [cantidad, setCantidad] = useState(0);
  const maximoSize = 100;

  const calcularIncremento = (militrosAdd, maxCapacidad) => {
    return (militrosAdd / (maxCapacidad * 1000)) * 100;
  };

  const incremento =
    maximaCapacidad === 3
      ? calcularIncremento(500, maximaCapacidad)
      : calcularIncremento(500, 2);

  const handleRellenar = () => {
    setCantidad((prev) =>
      prev + incremento < maximoSize ? prev + incremento : maximoSize
    );
  };

  const handleVaciado = () => {
    setCantidad(0);
  };

  return (
    <>
      <div className="contenedor">
        <div className="vaso-2l">
          <div className="medidas">
            {maximaCapacidad === 3 && (
              <>
                <div className="medida">3000 ml</div>
                <div className="medida">2500 ml</div>
              </>
            )}
            <div className="medida">2000 ml</div>
            <div className="medida">1500 ml</div>
            <div className="medida">1000 ml</div>
            <div className="medida">500 ml</div>
            <div className="medida">0 ml</div>
          </div>
          <div className="agua" style={{ height: `${cantidad}%` }}></div>
          {maximoSize === cantidad && (
            <div className="lleno">El vaso esta lleno!</div>
          )}
        </div>
        <div className="botones">
          <button className="vaciar" onClick={handleVaciado}>
            Vaciar recipiente
          </button>
          <button className="rellenar" onClick={handleRellenar}>
            Rellenar recipiente
          </button>
        </div>
      </div>
    </>
  );
};

export default VasoMarcas;

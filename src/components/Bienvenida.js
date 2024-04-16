import React from "react";
import { useNavigate } from "react-router-dom";

function Bienvenida() {
  const navigate = useNavigate();

  const irAFiltros = () => {
    navigate("/filtros");
  };

  return (
    <div
      className="bienvenida-container"
      style={{ textAlign: "center", marginTop: "20vh" }}
    >
      <h1>Bienvenido al Selector de Entretenimiento</h1>
      <button
        onClick={irAFiltros}
        className="boton-iniciar"
        style={{
          marginTop: "20px",
          fontSize: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Comenzar
      </button>
    </div>
  );
}

export default Bienvenida;

// import * as React from "react";
import { Link } from "react-router-dom";
import Registros from "./Componentes/Registros";

function Historial() {
  return (
    <><br /><br />
      <h1>Historial  📋</h1>
      <Registros />
      <Link to={"/"}>
        <button id="btn-regresar" className="btn btn-dark">VOLVER </button>
      </Link>
    </>
  );
}

export default Historial;

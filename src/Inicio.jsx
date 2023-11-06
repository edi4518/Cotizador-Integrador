import { Link } from "react-router-dom";
import Formulario from "./Componentes/Formulario";

function Inicio() {
  return (
    <>
      <br />
      <h1>Seguros del Hogar 🏡</h1>
      <br />
      <Formulario />
      <br /> <br />{" "}
      <Link to={"historial"}>
        <button id="historial" className="btn-historial btn-dark">
          <span className="content-btn-historial">Ver historial 📋</span>
        </button>
      </Link>
    </>
  );
}

export default Inicio;

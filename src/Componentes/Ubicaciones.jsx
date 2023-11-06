import { useContext } from "react";
import { AppContext } from "../AppContext";


function Ubicaciones (){

    const {ubicaciones, form, setForm} = useContext(AppContext);

    const handleChange = (event) => {
        console.log(event.target.value);
        const ubicacionSeleccionada = ubicaciones.find((ubicacion) => ubicacion.id == event.target.value);
        console.log(ubicacionSeleccionada);
    
        setForm({ ...form, ubicacionSeleccionada});
      };

      return (
        <>
            <label htmlFor="ubicacion">Selecciones su ubicación</label>
            <select name="ubicacion" id="ubicacion" onChange={handleChange} required>
                <option value=""  disabled>Seleccione por favor...</option>
                {ubicaciones.map((ubicacion) => (
                <option key={ubicacion.id} value={ubicacion.id}>
                {ubicacion.tipo}
          </option>
        ))}
            </select>
        

        </>
      )

};


export default Ubicaciones


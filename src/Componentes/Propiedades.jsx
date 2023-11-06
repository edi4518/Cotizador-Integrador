import { useContext } from "react";
import { AppContext } from "../AppContext";


function Propiedades (){

    const {propiedades, form, setForm} = useContext(AppContext);

    const handleChange = (event) => {
        console.log(event.target.value);
        const propiedadSeleccionada = propiedades.find((propiedad) => propiedad.id == event.target.value);
        console.log(propiedadSeleccionada);
    
        setForm({ ...form, propiedadSeleccionada});
      };

      return (
        <>
            <label htmlFor="propiedad">Selecciones el tipo de Propiedad</label>
            <select name="propiedad" id="propiedad" onChange={handleChange} required> 
                <option value="" disabled>Seleccione por favor...</option>
                {propiedades.map((propiedad) => (
                <option key={propiedad.id} value={propiedad.id}>
                {propiedad.tipo}
          </option>
        ))}
            </select>
        

        </>
      )

};


export default Propiedades


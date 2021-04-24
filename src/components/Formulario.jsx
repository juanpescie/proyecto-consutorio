import React, {useState} from "react";
import { v4 as uuid} from 'uuid';


const Formulario = ({crearCita})=>{
    

    const [cita, setCita] = useState({
        mascota:"",
        propietario: "",
        fecha:"",
        hora:"",
        sintomas:""
    });
    const actualizar = (e)=>{
        setCita({
            ...cita,[e.target.name]:e.target.value
        })
    }
    const submitForm = e =>{
        e.preventDefault()
        cita.id = uuid();
        crearCita(cita)
        setCita({
            mascota:"",
            propietario: "",
            fecha:"",
            hora:"",
            sintomas:""
        })
    }


const {mascota, propietario, fecha, hora, sintomas} = cita;
    return (
    <React.Fragment>
    <h2>formulario para crear consulta</h2>
    <form onSubmit={submitForm}>
        <label >Nombre de la mascota</label>
        <input type="text" 
        placeholder="nombre mascota..."
        className="u-full-width"
        name="mascota"
        onChange={actualizar}
        value={mascota} />

        <label>Dueño</label>
        <input type="text"
        placeholder="nombre del dueño.."
        className="u-full-width"
        name="propietario"
        onChange={actualizar}
        value={propietario}/>

        <label>fecha de la consulta</label>
        <input type="date"
               className="u-full-width"
               name="fecha"  
               onChange={actualizar}  
               value={fecha}
        />
        <label>hora</label>
        <input type="time"
               className="u-full-width"
               name="hora"
               onChange={actualizar}
               value={hora}
        />
        <label>sintomas</label>
        <textarea name="sintomas" 
        className="u-full-width"
        onChange={actualizar}
        value={sintomas}
        ></textarea>
        <button type="submit"
                className="u-full-width button-primary"
        >enviar solicitud</button>
    </form>
    </React.Fragment>
    )
}
export default Formulario;
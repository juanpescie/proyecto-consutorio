import React, { Fragment, useState, useEffect } from "react"
import Formulario from "./components/Formulario.jsx"
import Cita from "./components/Cita.jsx"
function App() {

  const [citas, guardarCitas] = useState([])

  const crearCita = cita => {
    guardarCitas([...citas, cita])
  }


  const borrarcitas = id => {
    guardarCitas(citas.filter(cita => cita.id !== id))
  }
  return (
    <Fragment>
      <h1>Formulario de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Consultas programadas</h2>
            {citas.map(c => {
              return (
                <Cita
                  eliminar={borrarcitas}
                  key={c.id}
                  cita={c} />
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

import React from 'react'
import "./modelado.css"

function Modelado() {
  return (
    <div className='contenedor'>
     <h1>Señor Calabaza - 3DMAX</h1>
     <img className='Imagen_Calabaza'
     src={require("./Modelos/Calabaza.png")}
     alt="Foto"
    />
    </div>
  )
}

export default Modelado
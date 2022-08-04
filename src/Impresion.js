import React from 'react'
import "./impresion.css"


function Impresion() {
  return (
    <div className='contenedor'>
     <h1>Majin Boo</h1>
     <img className='Imagen_Buu'
     src={require("./Impresiones/Buu.jpg")}
     alt="Foto"
    />
    <img className='Imagen_Buu'
    src={require("./Impresiones/Buterminado.jpg")}
    alt="imagen"
    />

    
    <h1>Deadpool</h1>
    <img className='Imagen_Deadpool'
    src={require("./Impresiones/Deadpool1.jpg")}
    alt="fotos"
    />
    <img className='Imagen_Deadpool'
    src={require("./Impresiones/Deadpool2.jpg")}
    alt="imagen"
    />
    <img className='Imagen_Deadpool'
    src={require("./Impresiones/Soporte1.jpg")}
    alt="imagen"
    />
    <img className='Imagen_Deadpool'
    src={require("./Impresiones/Soporte2.jpg")}
    alt="imagen"
    />
    <img className='Imagen_Deadpool'
    src={require("./Impresiones/Soporte3.jpg")}
    alt="imagen"
    />

    <h1>Kratos</h1>
    <img className='Imagen_Kratos'
    src={require("./Impresiones/kratos.jpg")}
    alt="fotos"
    />

    <h1>Loky</h1>
    <img className='Imagen_Loky'
    src={require("./Impresiones/Loky.jpg")}
    alt="fotos"
    />
    <img className='Imagen_Loky'
    src={require("./Impresiones/Loky2.jpg")}
    alt="fotos"
    />
    </div>
    
  )
}

export default Impresion
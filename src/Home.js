import React from 'react'
import "./home.css"
///import ImgJuegos from "./Imagenes/Juegos.jpg"
///import ImgImpresora from "./Imagenes/Impresora.jpg"
///import ImgModelo from "./Imagenes/Modelo.jpg"
//import ImgWeb from "./Imagenes/Web.jpg"

function Home() {
  return (
    <div className='home'>
        <div className='home__banner'>
            <h1>Yeison Polo Osorio</h1>
        </div>
        <div className='home__subBanner'>
            <p>Programador | Modelador 3D | Impresion 3D</p>
        </div>
        <div className='home__content'>
            <div className='home__content__title'>
                <h2>Proyectos</h2>
            </div>
            <div className='home__content__cluster'>
                <div>
                    <div className='juego'>
                        <a  href='/juegos'>
                            <h3>VIDEO JUEGOS</h3>
                        </a>
                        
                    </div>

                    <div>
                    <div className='impresion'>
                        <a href='/impresion'>
                            <h3>IMPRESION 3D</h3>
                        </a>
                    </div>
                </div>

                <div>
                    <div className='modelado'>
                        <a href='/modelado'>
                            <h3>MODELADO 3D</h3>
                        </a>
                    </div>
                </div>

                <div>
                    <div className='pagina'>
                        <a href='/paginas'>
                            <h3>PAGINA WEB</h3>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
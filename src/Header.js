import React from 'react'
import logo from "./Imagenes/Imagen.png"
import "./header.css"
import pdf from './pdf/CV_YEISON_POLO.pdf';


function Header() {
  return (
    <div className='header'>
        <div className='header__menu'>
            <a href='/' className='header__menu__logo'><img src={logo} alt="logo"/></a>
            <div className='header__nav'>
                <nav>
                    <a href={pdf}>CV</a>
                    <a href='/'>Portafolio</a>
                    <a href='/'>Github</a>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import "./juego.css"
import video from './VideoJuego/Juego FPS1.mp4'
import Galaxy from './VideoJuego/Galaxy.mp4'
import Dungeon from './VideoJuego/Dungeon.mp4'
import Flapy from './VideoJuego/Flapy.mp4'
import Push from './VideoJuego/Push.mp4'
import Push2 from './VideoJuego/Push2.mp4'
import SpaceInvader from './VideoJuego/SpaceInvader.mp4'

function Juego() {
  return (
    <div className='juegos'>
      <h1>FPS1</h1>
      <div className='video'>
     <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
</video>
</div>

<div className='juegos'>
     <h1>Galaxy Shooter</h1>
<div className='video'>
     <video width="750" height="500" controls >
      <source src={Galaxy} type="video/mp4"/>
</video>
</div>

<div className='juegos'>
     <h1>Dungeon Escape</h1>
<div className='video'>
     <video width="300" height="500" controls >
      <source src={Dungeon} type="video/mp4"/>
</video>
</div>
</div>

<div className='juegos'>
     <h1>Flappy Bird</h1>
<div className='video'>
     <video width="300" height="500" controls >
      <source src={Flapy} type="video/mp4"/>
</video>
</div>
</div>

<div className='juegos'>
     <h1>Push</h1>
<div className='video'>
     <video width="300" height="500" controls >
      <source src={Push} type="video/mp4"/>
</video>
</div>
</div>

<div className='juegos'>
     <h1>Whack The Junk Food</h1>
<div className='video'>
     <video width="300" height="500" controls >
      <source src={Push2} type="video/mp4"/>
</video>
</div>
</div>

<div className='juegos'>
     <h1>Space Invader Forever</h1>
<div className='video'>
     <video width="300" height="500" controls >
      <source src={SpaceInvader} type="video/mp4"/>
</video>
</div>
</div>

</div>

        </div>

  )
}

export default Juego
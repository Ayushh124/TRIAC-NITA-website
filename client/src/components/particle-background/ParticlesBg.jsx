import React from 'react'
import ParticlesComponent from './config/ParticlesComponent'
import './particles.css'

function ParticlesBg() {
  return (
   <div className='h-full w-full bg-transparent'>
    
    <ParticlesComponent
    id= "particles" />
   </div>
      
  )
}

export default ParticlesBg

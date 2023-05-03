import React from 'react'
import Typewriter from "typewriter-effect";
import '../../Pages/style.css'

function Text() {
  return (
    <Typewriter
      options={{ 
        strings: [
          "Profesora de Matemáticas",
          "Profesora de Física",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
       
      }}
    />
  )
}

export default Text

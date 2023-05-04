import React from 'react'
import { conjunton } from '../../documents'

function CardPrecios() {

  function onClick(e) {
    window.open(e.target.value)
  }

  
  
  return (
    <>
      {conjunton.map((val) => (
        <div className='items shadow'>
          {/* <h4>{val.src}</h4> */}
          <h1>
          {val.name}
          </h1>
          <p>{val.desc}</p>
          
          <button value={val.src} onClick={e=> onClick(e)} className='outline-btn'>descargar</button>
        
        </div>
      ))}
    </>
  )
}

export default CardPrecios

// `/clases/algebra/${id}`
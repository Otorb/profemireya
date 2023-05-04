import React from 'react'
import "./ConjuntoC.css"
import Cardinfo from './Cardinfo'


function ConjuntoC() {
  return (
    <>
    <div className='continerclass'>
    <div title='Choose The Right Plan' />
    <section className='price padding'>
      <div className='container grid'>
        <Cardinfo />
      </div>
    </section>
    </div>
    </>
  )
}

export default ConjuntoC
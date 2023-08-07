import React from 'react'
import './Clases.css'
import IMG1 from '../../Assets/online.png'
import IMG2 from '../../Assets/presencial.png'

    const soloProjects = [
      {
        id: 1,
        title: 'Online',
        img: IMG1,
        description:
          'Clases virtuales a través de la plataforma ZOOM o alguna plataforma digital.',

      },
      {
        id: 2,
        title: 'Presenciales',
        img: IMG2,
        description:
          'Clases Presenciales en el lugar determinado por el facilitador.',
      },
    
    ];
function Clases() {
  return (
    <section id="portfolio">
    <h2 className='titlevideo'style={{ marginLeft: "25px" }}>Clases</h2>

    <div className="container portfolio__container">
      {soloProjects.map((pro) => (
        <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} width="300px"  alt={pro.title} />
          </div>
          <div className="portfolio__item-content">
            <h3 style={{textAlign: "center"}} >{pro.title}</h3>
            <p style={{textAlign: "center"}}>{pro.description}</p>
        
          </div>
 
        </article>
      ))}
    </div>
  </section>
  )
}

export default Clases
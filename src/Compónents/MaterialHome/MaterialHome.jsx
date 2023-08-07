import React, { useState, createRef } from 'react'
import '../VideoClass/VideoTestimonio.css'
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Link } from 'react-router-dom'

function TestiHome() {
    const [model, setModel] = useState(false);
  const videoProperties = [
    {
        id: 1,
        title: "1 Límite indeterminado ∞/∞",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680730742460-limite%20indeterminado%20infinito.mp4?alt=media&token=f4a961a8-4723-4a98-8a1c-06728cd3befe",
        credit: "MireyaPedroza",
      }, 
      {
        id: 2,
        title: "1 Limite indeterminado",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680731972457-limite%20indeterminado.mp4?alt=media&token=e354644e-d667-4c40-8e18-fd1128d35757",
        credit: "MireyaPedroza",
      },
      {
        id: 3,
        title: "Producto de una Derivada",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680732539251-producto%20de%20una%20derivada.mp4?alt=media&token=647f8d2f-1b4b-4c2e-8925-f28bcf760294",
        credit: "MireyaPedroza",
      },
  ];

  return (
    <>
    <div className="videoclass">
    {/* <Button
    style={{ marginLeft:"20px"}}
    variant="info"
    size="sm" >
      <Link   style={{textDecoration: 'inherit', color: 'inherit'}} to={'/clases'} >
      Volver
      </Link>
    </Button> */}
    <div className='barra'>
      <h1 className='titlevideo' >Material de apoyo</h1>
      <Link   style={{textDecoration: 'inherit', color: 'inherit'}} to={'/clases'} >
      <h3 className='titlevideo2'>ver mas</h3>
      </Link>
      </div>
      <div className="gallery">
        {videoProperties.map((item, index) => {
          let divRef = createRef(null);
          const openModel = () => {
            divRef.current.classList.remove("video");
            divRef.current.classList.add("model");
            setModel(true);
          };
          const closeModel = () => {
            divRef.current.classList.add("video");
            divRef.current.classList.remove("model");
            setModel(false);
          };
          return (
            <div ref={divRef} className="video" key={index}>
              {model && (
                <button
                  className="model-close-btn"
                  onClick={() => closeModel()}
                >
                  X
                </button>
              )}
              <div className="video-container" onClick={() => openModel()}>
                <Video
                  style={{ with: "100%" }}
                  autoPlay={model}
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={item.src}//aca una foto de cada testimonio
                >
                  <source src={item.src} type="video/webm" />
                </Video>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}

export default TestiHome
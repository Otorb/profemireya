import React, { useState, createRef } from "react";
import "./VideoTestimonio.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function VideoClass() {
  const [model, setModel] = useState(false);
  const videoProperties = [
    {
      id: 1,
      title: "1 Límiteindeterminado infinito sobre infinito",
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
    {
      id: 4,
      title: "1 Límite indeterminado 0 sobre 0",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680732852323-limite%20indeterminado%200.mp4?alt=media&token=44e177dd-82a3-47d7-b1eb-a0941c3a213e",
      credit: "MireyaPedroza",
    },
    {
      id: 5,
      title: "2 Límite indeterminado",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680734772798-limite%20inde.mp4?alt=media&token=cabd32d8-938d-479b-9c8a-ea472bf40640",
      credit: "MireyaPedroza",
    },
    {
      id: 6,
      title: "Límite indeterminado funcional exponencial",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680735280115-limite%20inde%20func%20exponencial.mp4?alt=media&token=dffcb27f-a962-415d-8d9c-a7936727c72d",
      credit: "MireyaPedroza",
    },
    {
      id: 7,
      title: "2 Límite indeterminado 0 sobre 0",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680735733453-limite%20inde%200%20%20sobre%200.mp4?alt=media&token=cd5324f6-0e6b-40b3-a2e5-dbd4b285d05c",
      credit: "MireyaPedroza",
    },
    {
      id: 8,
      title: "2 Límite indeterminado infinito sobre infinito",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680736212118-limi%20inde%20infinito%20so%20infit.mp4?alt=media&token=2f7bd2b0-d7e7-4c90-8d96-9baf5973a3b7",
      credit: "MireyaPedroza",
    },
    {
      id: 9,
      title: "3 Límite indeterminado infinito sobre infinito",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680736627728-lim%20i%20inf%20s%20onf.mp4?alt=media&token=f6b976c9-d9f4-4d28-b9f6-39598764693f",
      credit: "MireyaPedroza",
    },
    {
      id: 10,
      title: "3 Límite indeterminado 0 sobre 0",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680737240187-li%20inde%200%20sobre%200.mp4?alt=media&token=e20c34c5-b0a7-4888-a111-6ac62399a72b",
      credit: "MireyaPedroza",
    },
    {
      id: 11,
      title: "Integración por sustitución",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680737553298-Integraci%C3%B3n%20%20por%20Sustituci%C3%B3n.mp4?alt=media&token=2afa783f-c8ae-439d-a052-7dc0cb1b4b42",
      credit: "MireyaPedroza",
    },
    {
      id: 12,
      title: "Integración por partes",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680737885670-Integraci%C3%B3n%20%20por%20Partes.mp4?alt=media&token=9696d6c5-3eff-42f8-8c70-191c14ff0268",
      credit: "MireyaPedroza",
    },
  ];

  return (
    <>
    <div className="videoclass">
    <Button
    style={{ marginLeft:"20px"}}
    variant="info"
    size="sm" >
      <Link   style={{textDecoration: 'inherit', color: 'inherit'}} to={'/clases'} >
      Volver
      </Link>
    </Button>
      <h1 style={{ textAlign: "center" }}>Clases Grabadas</h1>
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
                <h3 style={{ color: "black" }}>{item.title} </h3>
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
                  poster={item.src} //aca una foto de cada testimonio
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
  );
}

export default VideoClass;

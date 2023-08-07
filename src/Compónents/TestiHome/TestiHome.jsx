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
        title: "Elizabeth Venegas",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680725612962-Testimonio%201.mp4?alt=media&token=d5bf1356-5b3d-48aa-bbaf-0ed00b18ad3e",
        credit: "Testimonio",
        ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/81491659_10218964411035744_441341880035180544_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=xW1njeYPoNgAX_e3kFX&_nc_ht=scontent-mia3-2.xx&oh=00_AfDWmsafNxPtIqduepqe3xB-lTR53WgpFTkJpYEBaQR1XA&oe=648B345F",
      },
      {
        id: 2,
        title: "Ery Carolina Prieto",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680727685663-Testimonio%202.mp4?alt=media&token=369ceca5-55c0-4294-af6c-1bb6d541f239",
        credit: "Testimonio",
        ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/1924333_390842111079852_7401321207928641515_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=8yb0Xm1PIBQAX8jko2q&_nc_ht=scontent-mia3-2.xx&oh=00_AfB75eBYCHlOxHyDgR23iSyUGPcTCJyRwaGTfwZr5kGGXg&oe=648B3689",
      },
      {
        id: 3,
        title: "Valentina Alba",
        src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728021331-Testimonio%203.mp4?alt=media&token=652a61a8-13be-4ecd-864e-3d27c94e5f13",
        credit: "Testimonio",
        ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-1/17202925_1296287860436517_8826579494744532837_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dXrIMKQ7i6YAX_YuSAh&_nc_ht=scontent-mia3-1.xx&oh=00_AfBZm1yZ6U9bJJ50wPGWB9i9p0sriKVcK91Q5i1W-0J_Iw&oe=648B2D6D",
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
      <h1 className='titlevideo' >Testimonio</h1>
      <Link   style={{textDecoration: 'inherit', color: 'inherit'}} to={'/testimony'} >
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
                  poster={item.ph}//aca una foto de cada testimonio
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
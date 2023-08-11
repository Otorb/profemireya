import React, { useState, createRef } from 'react'
import '../VideoClass/VideoTestimonio.css'
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Link } from 'react-router-dom'

function TestiHome() {
    const [model, setModel] = useState(false);
  const videoProperties = [
    {
      id: 5,
      title: "Dula Maplewood",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729200672-Testimonio%205.mp4?alt=media&token=d795a896-9b0a-4d36-a4be-60ebf080b619",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/21462777_280716669000160_5529225391796861236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_aid=0&_nc_ohc=Jsa2F0vlOlkAX-gWe4r&_nc_ht=scontent-mia3-2.xx&oh=00_AfDB_vr4yjVgAOGhg0yM2s81hXzmABlEUPn0-GxtESun5A&oe=648B077E",
    },
    {
      id: 3,
      title: "Valentina Alba",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728021331-Testimonio%203.mp4?alt=media&token=652a61a8-13be-4ecd-864e-3d27c94e5f13",
      credit: "Testimonio",
      ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-1/17202925_1296287860436517_8826579494744532837_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dXrIMKQ7i6YAX_YuSAh&_nc_ht=scontent-mia3-1.xx&oh=00_AfBZm1yZ6U9bJJ50wPGWB9i9p0sriKVcK91Q5i1W-0J_Iw&oe=648B2D6D",
    },
    {
      id: 4,
      title: "Alessandro Colombano",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728778976-Testimonio%204.mp4?alt=media&token=568948da-e774-439f-a44a-04cf0bde22a5",
      credit: "Testimonio",
      ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/1391977_10202039007437191_928330509_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=882AWHa_I2QAX9AcX_R&_nc_ht=scontent-mia3-1.xx&oh=00_AfCHew5x75lof798c19rzCeSLQT18eCimFzn9JZMb15nnA&oe=648B1429",
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
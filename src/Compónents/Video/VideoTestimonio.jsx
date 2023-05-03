import React, {useState, createRef } from "react";
import "./VideoTestimonio.css"

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function VideoTestimonio() {
    const [model, setModel] = useState(false)
  const videoProperties = [
    {
      id: 1,
      title: "Elizabeth Venegas",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680725612962-Testimonio%201.mp4?alt=media&token=d5bf1356-5b3d-48aa-bbaf-0ed00b18ad3e",
      credit: "Testimonio",
    },
    {
      id: 2,
      title: "Erika Prieto",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680727685663-Testimonio%202.mp4?alt=media&token=369ceca5-55c0-4294-af6c-1bb6d541f239",
      credit: "Testimonio",
    },
    {
      id: 3,
      title: "Valentina",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728021331-Testimonio%203.mp4?alt=media&token=652a61a8-13be-4ecd-864e-3d27c94e5f13",
      credit: "Testimonio",
    },
    {
      id: 4,
      title: "Alexandro",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728778976-Testimonio%204.mp4?alt=media&token=568948da-e774-439f-a44a-04cf0bde22a5",
      credit: "Testimonio",
    },
    {
      id: 5,
      photo:"https://www.uch.edu.pe/sites/default/files/styles/blog_image/public/blog-img/matematicas_web_uch_2.jpg?itok=IMAKAKhA",
      title: "...",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729200672-Testimonio%205.mp4?alt=media&token=d795a896-9b0a-4d36-a4be-60ebf080b619",
      credit: "Testimonio",
    },
    {
      id: 6,
      title: "...",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729323339-Testimonio%206.mp4?alt=media&token=7c19a011-780e-4307-a256-5298fc0e645c",
      credit: "Testimonio",
    },
    {
      id: 7,
      title: "Daniel",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729562221-Testimonio%207.mp4?alt=media&token=fdc0a23e-a470-4503-b8bc-637034b0ae95",
      credit: "Testimonio",
    },
    {
      id: 8,
      title: "Miguel",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729774388-Testimonio%208.mp4?alt=media&token=52a3cf67-23cd-4519-9834-00d22b27c291",
      credit: "Testimonio",
    },
    {
      id: 3,
      title: "Ennar Arrioja",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680730245513-Testimonio%209.mp4?alt=media&token=1d13c18c-f67a-4238-a410-92f5192555b4",
      credit: "Testimonio",
    },
    {
      id: 10,
      title: "Antonio Martinez",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680730341196-Testimonio%2010.mp4?alt=media&token=79287914-8b0b-4a31-bca3-5cbb7c76e9b2",
      credit: "Testimonio",
    },
  ];

  return (
    <>
    <div className="testimony">
      <h1 style={{ textAlign: "center" }}>Testimonios</h1>
      <div className="gallery">
        {videoProperties.map((item, index) => {
            let divRef = createRef(null)
            const openModel = () =>{
                divRef.current.classList.remove("video");
                divRef.current.classList.add("model")
                setModel(true)
            }
            const closeModel = () =>{
                divRef.current.classList.add("video");
                divRef.current.classList.remove("model")
                setModel(false) 
            }
          return (
            <div ref={divRef} className="video" key={index}>
                {model && <button className="model-close-btn" onClick={()=> closeModel()}>X</button>}
              <div className="video-container" onClick={()=> openModel()} >
              
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
                 
                    <source src={item.src} type="video/webm"/>
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

export default VideoTestimonio;

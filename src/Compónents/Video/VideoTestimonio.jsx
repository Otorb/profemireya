import React, {useState, createRef } from "react";
import "./VideoTestimonio.css"

import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import vide9 from './video.mp4'
import video10 from './Repearar.mp4'
import Testimony from "./Testimony";

function VideoTestimonio() {
    const [model, setModel] = useState(false)
  const videoProperties = [
    {
      id: 1,
      title: "Elizabeth Venegas",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680725612962-Testimonio%201.mp4?alt=media&token=d5bf1356-5b3d-48aa-bbaf-0ed00b18ad3e",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/81491659_10218964411035744_441341880035180544_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=xW1njeYPoNgAX_e3kFX&_nc_ht=scontent-mia3-2.xx&oh=00_AfDWmsafNxPtIqduepqe3xB-lTR53WgpFTkJpYEBaQR1XA&oe=648B345F"
    },
    {
      id: 2,
      title: "Ery Carolina Prieto",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680727685663-Testimonio%202.mp4?alt=media&token=369ceca5-55c0-4294-af6c-1bb6d541f239",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/1924333_390842111079852_7401321207928641515_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=8yb0Xm1PIBQAX8jko2q&_nc_ht=scontent-mia3-2.xx&oh=00_AfB75eBYCHlOxHyDgR23iSyUGPcTCJyRwaGTfwZr5kGGXg&oe=648B3689"
    },
    {
      id: 3,
      title: "Valentina Alba",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728021331-Testimonio%203.mp4?alt=media&token=652a61a8-13be-4ecd-864e-3d27c94e5f13",
      credit: "Testimonio",
      ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-1/17202925_1296287860436517_8826579494744532837_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=dXrIMKQ7i6YAX_YuSAh&_nc_ht=scontent-mia3-1.xx&oh=00_AfBZm1yZ6U9bJJ50wPGWB9i9p0sriKVcK91Q5i1W-0J_Iw&oe=648B2D6D"
    },
    {
      id: 4,
      title: "Alessandro Colombano",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680728778976-Testimonio%204.mp4?alt=media&token=568948da-e774-439f-a44a-04cf0bde22a5",
      credit: "Testimonio",
      ph:"https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/1391977_10202039007437191_928330509_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=882AWHa_I2QAX9AcX_R&_nc_ht=scontent-mia3-1.xx&oh=00_AfCHew5x75lof798c19rzCeSLQT18eCimFzn9JZMb15nnA&oe=648B1429"
    },
    {
      id: 5,
     title: "Dula Maplewood",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729200672-Testimonio%205.mp4?alt=media&token=d795a896-9b0a-4d36-a4be-60ebf080b619",
      credit: "Testimonio",
      ph:"https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/21462777_280716669000160_5529225391796861236_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_aid=0&_nc_ohc=Jsa2F0vlOlkAX-gWe4r&_nc_ht=scontent-mia3-2.xx&oh=00_AfDB_vr4yjVgAOGhg0yM2s81hXzmABlEUPn0-GxtESun5A&oe=648B077E"
    },
    {
      id: 6,
      title: "Georgia Duque",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729323339-Testimonio%206.mp4?alt=media&token=7c19a011-780e-4307-a256-5298fc0e645c",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/73342435_138722850755531_8615861174967205888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=39D9UMM64ZoAX8LmLQD&_nc_ht=scontent-mia3-2.xx&oh=00_AfAbsecNj9ncg_1pS1CAsT6Hn2rRolbE2r74AFLZd2ejvA&oe=648B20C4"
    },
    {
      id: 7,
      title: "Daniel Pierluissi",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729562221-Testimonio%207.mp4?alt=media&token=fdc0a23e-a470-4503-b8bc-637034b0ae95",
      credit: "Testimonio",
     ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t31.18172-8/1796924_10152661752061639_4722095010199311901_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=CbXAsq6qSOkAX-oHPdh&_nc_ht=scontent-mia3-1.xx&oh=00_AfBWohyGrdJ1Ni9h-pZ5r6AKj8GbGL_QexewcmCzSOHltA&oe=648B3929"
    
    },
    {
      id: 8,
      title: "Miguel Aranguren",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680729774388-Testimonio%208.mp4?alt=media&token=52a3cf67-23cd-4519-9834-00d22b27c291",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/75650499_10217291149845490_6131874072050532352_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B4thXBbdLngAX8WHwjB&_nc_ht=scontent-mia3-2.xx&oh=00_AfD1CGm_eu72PNhIuCBS_Z-1ut0HW-235mfjrZSI_kJpbA&oe=648B178C"
    },
    {
      id: 9,
      title: "Ennar Arrioja",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680730245513-Testimonio%209.mp4?alt=media&token=1d13c18c-f67a-4238-a410-92f5192555b4",
      credit: "Testimonio",
      ph: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/341154158_2454527044712947_2639515237364340719_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xjF5hm4spKMAX8ZpmMV&_nc_ht=scontent-mia3-2.xx&oh=00_AfDZfgaeWtjo36I0VNH8_XnFpn-g5mwsg-KZxVFwTpaATA&oe=6468F985"
    },
    {
      id: 10,
      title: "Antonio Martinez",
      src: "https://firebasestorage.googleapis.com/v0/b/ecommerce-597b3.appspot.com/o/Videos%2F1680730341196-Testimonio%2010.mp4?alt=media&token=79287914-8b0b-4a31-bca3-5cbb7c76e9b2",
      credit: "Testimonio",
      ph: "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/81571567_1586583251498067_2945366512921214976_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=hFBvAwBm7l0AX-jp48y&_nc_ht=scontent-mia3-1.xx&oh=00_AfAx9rJnDjnG6sxhAX8Q0J-YFiy4Y2EH-7SHPPybYfXjFQ&oe=648B3F28"
    },
    {
      id: 11,
      title: "Silvia Meola",
      src: vide9,
      credit: "Testimonio",
      ph : "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-1/82490785_10221956529441591_4268268958949310464_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=S_3aCTj1EGsAX-IPClH&_nc_ht=scontent-mia3-1.xx&oh=00_AfB64NrNrfwJt4rAy7tVkAQ2bt1wEvGzSzlguc4y8c9imw&oe=648B2E3C"
    },
    {
      id: 12,
      title: "Sebastian Paoli",
      src: video10,
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
              
                {model && <button className="model-close-btn"  style={{marginTop: "150px"}} onClick={()=> closeModel()}>X</button>}
              <div className="video-container" onClick={()=> openModel()} >
              <h4 style={{ color: "black", textAlign: "center" }}>{item.title} </h4>
                <Video

                  style={{ with: "10%" }}
                  autoPlay={model}
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={item.ph} //aca una foto de cada testimonio
                >
                 
                    <source style={{width: "70%", height: "70%" }} src={item.src} type="video/webm"/>
                </Video>
              </div>
            </div>
          );
        })}
      </div>
      <Testimony />
      </div>
    </>
  );
}

export default VideoTestimonio;

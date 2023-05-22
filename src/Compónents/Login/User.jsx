import React, { useEffect } from "react";
import { app } from "../../fb";
import Materiales from "../Material/Materiales";
import '../Login/Login.css'
import { Link } from 'react-router-dom'


function User() {
    const [user, setUsuario] = React.useState(null);
    const cerrarSesion = () => {
      app.auth().signOut();
    };
  
    useEffect(() => {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        setUsuario(usuarioFirebase);
      });
    }, []);
    
    let userNameShow =  user?.email.split("@")[0];
    
    
    
  return (
    <div style={{marginTop: "180px"}}>
    <h1 style={{marginLeft: "20px"}}> ¡Bienvenido {userNameShow}!</h1>
       <div style={{textAlign: "center" }}>

    <button  className='loginbutton2'  >
    <Link   style={{textDecoration: 'inherit', color: 'inherit'}} to={'/videoclass'} >Videos de Clases </Link>
    </button><br /><br />
    </div> 
    <div style={{textAlign: "center",marginTop:"30px", marginBottom:"-70px" }}>
    <h1>Material de apoyo</h1>  
    </div>
    <div style={{marginLeft: "20px"}}>

   <Materiales />
   </div>
  </div> 
  )
}

export default User

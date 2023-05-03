import React from 'react'
import './Login.css'
import { app } from "../../fb"

function Login(props) {

    const [isRegistrando, setIsRegistrando] = React.useState(false);

    const crearUsuario = (correo, password) => {
      app
        .auth()
        .createUserWithEmailAndPassword(correo, password)
        .then((usuarioFirebase) => {
          props.setUsuario(usuarioFirebase);
        });
    };
  
    const iniciarSesion = (correo, password) => {
      app
        .auth()
        .signInWithEmailAndPassword(correo, password)
        .then((usuarioFirebase) => {
          props.setUsuario(usuarioFirebase);
        });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      const correo = e.target.emailField.value;
      const password = e.target.passwordField.value;
  
      if (isRegistrando) {
        crearUsuario(correo, password);
      }
  
      if (!isRegistrando) {
        iniciarSesion(correo, password);
      }
    };
  
    

  return (
      <div className="totalback">
    <div className="containerLogin">
    <div className="innerBox">
    <h1 className="headingLogin"> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
    <form onSubmit={submitHandler}>
      <label  htmlFor="emailField"> Correo </label><br></br>
      <input className="footerLogin" type="email" id="emailField" /><br></br>
      <label htmlFor="passwordField"> Contraseña </label><br></br>
      <input className="footerLogin" type="password" id="passwordField" /><br></br>
      <button className='footerLoginbutton' type="submit">
        {" "}
        {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
      </button>
    </form>
    <button className='footerLoginbutton' onClick={() => setIsRegistrando(!isRegistrando)}>
      {isRegistrando
        ? "¿Ya tienes cuenta? ¡Inicia sesión"
        : "¿No tienes cuenta? ¡Regístrate gratis!"}
    </button>
  </div>    
  </div>  
  </div>
  )
}

export default Login

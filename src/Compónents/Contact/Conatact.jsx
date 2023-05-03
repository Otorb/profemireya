import React from 'react'
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import '../../Pages/style.css'

function Conatact() {
  const navigate = useNavigate();
  //mail aqui
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99r4kuy",
        "template_qweik2s",
        e.target,
        /* "u1W0PSDVrZHmTdhGBrhGp", */
        '7lKAr0QQPtaCO09cU',
        /* "m161GBw_7jaymvDc3", */
        alert("Su mensaje ha sido enviado, pronto te responderemos")
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    navigate("/");
  }
 
  return (
    <div className="wrapper">
    <form className="form" onSubmit={(e) => sendEmail(e)}>
      <div className="pageTitle title">Contacto </div>
      <div className="secondaryTitle title">
        Envía tu comentario o sugerencia.
      </div>
      <input
        type="text"
        className="name formEntry"
        name="name"
        placeholder="Nombre"
      />
      <input
        type="text"
        className="email formEntry"
        name="correo"
        placeholder="Correo"
      />
      <textarea
        className="message formEntry"
        name="mensaje"
        placeholder="Mensaje"
      ></textarea>
      <button className="submit formEntry" onclick="thanks()">
        Enviar
      </button>
    </form>
  </div>
  )
}

export default Conatact

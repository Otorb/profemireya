import React from "react";
import "./ContactHome.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function ContactHome() {
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
        "7lKAr0QQPtaCO09cU",
        /* "m161GBw_7jaymvDc3", */
        alert("Su mensaje ha sido enviado, pronto te responderemos")
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    navigate("/");
  }

  return (
    <div className="ImageTopFooter" id="ContactHome">
      <div className="ConctactBody">
        <div className="AboutContainer">
          <h1 className="StyledHeading">¿Tienes alguna duda?</h1>

          <div className="TextSection">
            Escríbeme y diseñare una clase especial para ti de acuerdo a tus
            necesidades puntuales o de tus intereses futuros profesionales. Que
            la matemática no sea un obstáculo para cumplir tus metas sino un
            peldaño para alcanzarlas. ¡Contáctame y cuéntame tu problema, lo
            resolveremos juntos!
          </div>
        </div>

        <div className="formularioCOmpleto">
          <form  onSubmit={(e) => sendEmail(e)}>
            <input
              type="text"
              className="inpucorreo"
              name="name"
              placeholder="Nombre"
            />
            <br />
            <br />
            <input
              type="text"
              className="inpucorreo"
              name="correo"
              placeholder="Correo"
            />
            <br />
            <br />
            <textarea
              className="inpucorreo"
              name="mensaje"
              placeholder="Mensaje"
            ></textarea>
            <br />
            <button className="btn-contact">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactHome;

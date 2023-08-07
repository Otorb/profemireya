import React from "react";
import "./ContactHome.css";

function ContactHome() {
  return (
    <div className="ImageTopFooter">
    <div className="ConctactBody">
      
      <div className="AboutContainer">
        <h1 className="StyledHeading">¿Tienes alguna duda?</h1>

        <div className="TextSection">
        Escríbeme y diseñare una clase especial para ti de acuerdo a tus necesidades 
        puntuales o de tus intereses futuros profesionales. Que la matemática no sea un 
        obstáculo para cumplir tus metas sino un peldaño para alcanzarlas. ¡Contáctame y 
        cuéntame tu problema, lo resolveremos juntos!
        </div>

      </div>

      <div className="formularioCOmpleto">
      <input
        type="text"
        className="inpucorreo"
        name="name"
        placeholder="Nombre"
      /><br /><br />
      <input
        type="text"
        className="inpucorreo"
        name="correo"
        placeholder="Correo"
      /><br /><br />
      <textarea
        className="inpucorreo"
        name="mensaje"
        placeholder="Mensaje"
      ></textarea>
      <br/>
      <button >
        Enviar
      </button>
        </div>

      </div>
    </div>
  );
}

export default ContactHome;

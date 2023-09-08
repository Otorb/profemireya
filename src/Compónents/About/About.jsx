import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Pages/style.css";

function About() {
  return (
    <div className="aboutpagebackground" id="about">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              Sobre <span>Mí</span>
            </h3>
            <br />
            {/* <h2 className="aboutmetext" style={{ textAlgin: "center" }}>
              ¡Por la gracia de Dios!{" "}
            </h2> */}

            <p className="aboutdetails" style={{ textAlign: "justify" }}>
              Por la gracia de Dios, soy doctora en Ciencias de la Educación,
              egresada de la Universidad Santa María (USM). Mi disertación
              doctoral se tituló “Modelo Epistémico Sistémico para Integrar la
              Investigación a la Docencia, en la Enseñanza de las Ciencias”.
              Obtuve una Mención Honorifica por la estructura metodológica y
              esmerada labor en la disertación.
              <br /> <br />
              Realicé una Maestría en Educación, Mención Enseñanza de la Física,
              de la Universidad Pedagógica Experimental Libertador. La tesis
              “The Liouville Condition and Nambu Mechanic” fue publicada en
              Journal of Physics A: Mathematical and General: Gen 29 (1996)
              1037-1044. Printed in the U.K.
              <br /> <br />
              Me gradué como profesora de Matemática de la Universidad
              Pedagógica Experimental Libertador (UPEL). Mientras estudiaba, fui
              seleccionada como preparadora en Cálculo I y Cálculo II.
              <br /> <br />
              Me he desempeñado como profesora de Matemática y Física en
              diferentes instituciones educativas de Venezuela. En los niveles
              de Educación Media, además de enseñar, serví como coordinadora de
              varios eventos: Mini-Olimpiadas de Matemática, Exposición de
              Física, Premio al Mérito para Incrementar el Rendimiento de los
              Estudiantes y Amor a su Institución Educativa (lo cual afianza los
              valores de solidaridad, cooperación, y responsabilidad). He
              recibido muchos reconocimientos, entre ellos, fui condecorada con
              la Orden Francisco de Miranda.
              <br /> <br />
              Como docente universitaria, he trabajado en las siguientes
              instituciones de Educación Superior del país: Universidad Central
              de Venezuela, Universidad Pedagógica Experimental Libertador,
              Universidad Alejandro de Humboldt, Universidad Nacional
              Experimental de las Fuerzas Armadas, Escuela de Hacienda, Escuela
              Nacional de Administración y Hacienda Pública, Colegio
              Universitario Francisco de Miranda, y en la Universidad Nueva
              Esparta. En las diferentes universidades he enseñado los
              siguientes cursos: Matemática I, Matemática II, Matemática III,
              Cálculo I, Cálculo II, Matemática para Educación Especial, Juegos
              y Recursos Educativos de Matemática, Metodología de la
              Investigación, Razonamiento Lógico, Enseñanza de la Matemática
              para Futuros Docentes Integrales, Estadística, Geometría
              Analítica, Algebra Lineal, y Física. Además de ser docente, me he
              desempeñado como Directora de Investigación a nivel de Pregrado,
              Postgrado y Doctorado en la Universidad Nacional Experimental de
              las Fuerzas Armadas (UNEFA). Fui jurado de diferentes
              disertaciones doctorales en la Universidad Santa María (USM).
            </p>

            <ul className="skilllist" style={{ marginTop: "-50px" }}>
              <Row>
                <h3>Áreas</h3>
                <Col md={7}>
                  <ul> Matemática básica.</ul>
                  <ul> Matemática I.</ul>
                  <ul> Matemática II.</ul>
                  <ul> Matemática III.</ul>
                  <ul>Cálculo I.</ul>
                  <ul>Cálculo II.</ul>
                  <ul>Matemática para Educación Especial.</ul>
                  <ul>Juegos y Recursos Educativos de Matemáticas.</ul>
                  <ul>Metodología de la Investigación.</ul>
                  <ul> Razonamiento Lógico.</ul>
                  <ul>
                    Enseñanza de la Matemáticas para futuros docentes
                    integrales.{" "}
                  </ul>
                  <ul> Estadística. </ul>
                  <ul>Geometría Analítica.</ul>
                  <ul>Algebra Lineal.</ul>
                  <ul>Algebra I</ul>
                  <ul>Algebra II</ul>
                  <ul>Geometry</ul>
                  <ul>Física: </ul>
                  <ul>Cinemática </ul>
                  <ul> Dinamica</ul>
                  <ul>Electromagnetismo.</ul>
                  <br />
                  <ul>Metodología de la Investigación.</ul>
                </Col>
                {/* <Col md={5}>
                  <ul> Física.</ul>
                  <ul>Cinemática.</ul>
                  <ul> Dinámica.</ul>
                  <ul> Electromagnetismo.</ul>
                  <ul> ¡Mucho más!...</ul>
                </Col> */}
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

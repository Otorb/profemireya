import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../Pages/style.css"

function About() {
  return (
    <div className='aboutpagebackground' id="about">
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mí</span></h3>
                        <br />
                        <h2 className='aboutmetext' style={{textAlgin : "center" }}>¡Por la gracia de Dios! </h2>

                        <p className='aboutdetails'>Soy profesora de matemáticas y magister en educación: Mención Enseñanza de la Física, ambas de la Upel y Dra  en  Ciencias de la Educación egresada de la USM. He dictado clases de Matemáticas y Física en diferentes instituciones educativas del país UCV,. UPEL USM, UAH, UNE entre otras. Fui Jurado Principal de Tesis Doctorales por más de 10 años en USM , como también Jefe de Investigación, pregrado, postgrado y doctorado Unefa de La Guaira.  </p>
                       <ul className='skilllist'>
                            <Row>
                                <h3>Áreas</h3>
                                <Col md={7}>
                                    <li>Matemática básica.</li>
                                    <li>Conjunto N, Z, Q, R, C.</li>
                                    <li>Algebra.</li>
                                    <li>Matemática.</li>
                                    <li>Integrales.</li>
                                    <li>Límite.</li>
                                    <li>Geometría analítica.</li>
                                </Col> 
                                <Col md={5}>
                                    <li>Física.</li>
                                    <li>Cinemática.</li>
                                    <li>Dinámica.</li>
                                    <li>Electromagnetismo.</li>
                                    <li>¡Mucho más!...</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default About

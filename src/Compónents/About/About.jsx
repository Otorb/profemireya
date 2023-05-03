import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../Pages/style.css"

function About() {
  return (
    <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mí</span></h3>
                        <p className='aboutdetails'>Soy doctora en Ciencias de la Educación. (2006) egresada USM. Mi tesis doctoral se titulo Modelo Epistémico Sistémico para integrar la investigación a la docencia, en la enseñanza de las Ciencias. Obtuve Mención Honorifica por su estructura metodológica y esmerada labor. Realice Maestría en Educación: Mención Enseñanza de la Física, UPEL 1995, mi tesis fue publicada en Physi A Math Gen 29(1996) 1037-1044. Profesora de Matemáticas egresada UPEL 1981, me destaque como preparadora por 5 semestres de Calculo I y Calculo II.</p>
                        <p className='aboutdetails'>Me he desempeñado como profesora de Matemáticas y Física en diferentes instituciones educativas del país., y a mi cargo he tenido varias coordinaciones como: Mini-Olimpiadas de Matemáticas, Exposición de Física, “Premio al Merito”(para incrementar el rendimiento de los estudiantes), Amor a su Institución Educativa. (Restauración de la institución educativa y a su vez afianzar los valores de solidaridad, cooperación, responsabilidad) le ha tocado diferentes facetas y la satisfacción de ver que estos programas, dieron resultado en la institución educativa donde se aplico.</p>
                        <p className='aboutdetails'>Los jóvenes no solo culminaron el bachillerato sino también finalizaron sus carreras universitarias. He tenido muchos reconocimientos como organizadora de tales eventos. Condecorada con la “Orden 27 de Junio según Decreto Nº 1350 de fecha 22-06-81. He publicado trabajo estabilidad en una versión a la Nambu de un Modelo de Emisión de Radiación. Acta Científica Venezolana Volumen 45 Suplemento Número 1. A994. Ha participado Ponencias XLV Convención Anual Asovac 1994. XI jornada anual de investigación III Jornada ANUAL DE POSTGRADO 2004.He sido Jurado Principal demás de 15 años. UPEL Matemática I, Matemática II, Matemática para Educación Especial, Juegos y Recursos Educativos de Matemáticas. Universidad Humboldt Metodología de la Investigación, Razonamiento Lógico, Matemáticas. Unefa desde 2007 profesora de Matemática, Estadística, Geometría Analítica, Algebra Lineal , Fisica . He trabajado en diferentes Universidades de Venezuela como Humboldt, Unefa, USM, CUFM, Escuela de Hacienda, UNE y UCV.</p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Áreas</h3>
                                <Col md={7}>
                                    <li>Matemática I, II y III</li>
                                    <li>Matemática de secundaria y universitaria</li>
                                    <li>Algebra I, II, III</li>
                                    <li>Conjunto N, C, Q, R, Z</li>
                                    <li>Integrales</li>
                                    <li>Límite</li>
                                </Col> 
                                <Col md={5}>
                                    <li>Física I y II</li>
                                    <li>Ecuaciones</li>
                                    <li>Álgebra</li>
                                    <li>Trigonometría</li>
                                    <li>¡Mucho más!..</li>
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

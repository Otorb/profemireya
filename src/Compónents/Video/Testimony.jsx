import React from 'react'
import ProjectCard from './propCards'
import { Container, Row, Col } from "react-bootstrap";
import oscar from './oscar.jpeg'
import angel from './angel.jpeg'

function Testimony() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={oscar}
                isBlog={false}
                title="Oscar Pino"
                description="Para mí es todo un honor que una Educadora como usted me haya tomado en cuenta, las experiencias vividas durante la epoca de mi educación básica en matemáticas como en física fueron extraordinarias, más aun por las dinámicas desempeñadas; como lo fue periódico matemático, la elaboración de diferentes actividades donde se nos ocurrió como grupo la elaboración de una maquina del tiempo en donde personalizamos diferentes científicos de la historia, las practicas ejercidas nos ayudó a captar las matemáticas de una manera más sencilla y más práctica. El apoyo de manera grupal fue excelente. 
               
                Nos incentivó a que aprendiéramos más  y a desarrollar nuestras habilidades de manera  integral. Tanto fue la motivación que muchos de nosotros estudiamos Matemáticas e ingenierías, donde hemos sido facilitadores para otros.
                Siempre le doy gracias a Dios por haberme colocado a una docente como usted, la vocación que tiene es inigualable y la hacer ser una persona única. Siempre estuvo al pendiente de nosotros y dispuesta a dar un buen consejo. 
                Espero volver a tener la oportunidad de compartir más con usted. Le envío un abrazo gigante y que este año sea un año de mucho crecimiento. Se le quiere y se le aprecia mucho. "
                 // ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={angel}
                isBlog={false}
                title="Angel Lira"
                description='La adolescencia es probablemente la etapa mas susceptible de ser recordada, en ella, descubrimos muchísimas cosas acerca de nuestra condición humana, nos enfrentamos a nuevos sentimientos, cambios físicos e incluso nuevas maneras de abordar las relaciones interpersonales.
                Cada uno lleva el proceso a su manera, en función a su entorno, su nueva visión del mundo entremezclada con sus arraigos y soportado por las bases de su formación familiar. Para algunos fueron tiempos difíciles e inciertos, para otros tiempos maravillosos, en mi caso personal logre conseguirme a un verdadero ángel en el camino, que cambio mi vida para siempre. Es difícil precisar fechas, pero transcurrían mediados de los 90s en el liceo Agustín Aveledo en los Frailes de Catia.
                Llegue a esta institución en calidad de repitiente de tercer año de bachillerato, mi liceo anterior fue el instituto técnico Jesús Obrero en donde reprobé dos asignaturas, matemáticas y Biología, a pesar de que recuerdo haber hecho mi mejor esfuerzo, no logré superar estas asignaturas, mis padres decidieron castigarme haciéndome repetir el tercer año de bachillerato en "el peor liceo existente en la zona".
                Mi estima estaba por el piso, había perdido la confianza en mi, tenia miedo. Sin embargo hasta el sol de hoy sigo dando gracias a Dios por haber llegado a ese lugar. Recuerdo perfectamente la primera clase con la Profesora Mireya Pedroza, ella lucia super enérgica e irradiaba inteligencia pero también una gran bondad y sabiduría, en cuestión de días me convertí un excelente alumno en matemáticas, todo aquello que tanto me había costado aprender con ella fue un proceso sumamente placentero, sencillamente me enamore de las matemáticas. Hasta el punto de que incluso ella me doto de herramientas pedagógicas para ayudar a otros alumnos con dificultades. Pero en realidad eso no fue lo mas relevante durante ese maravilloso año en el liceo. Cada sesión era algo totalmente increíble, la profesora combinaba su profundo conocimiento técnico, con un maravilloso arsenal de herramientas para la vida, nos enseño el valor de la honestidad, de la bondad, de la fe, ella logro increíbles cambios en mi y en muchos de mis compañeros.
                La profesora Mireya es sin duda una de las personas mas especiales que he conocido en mi vida, mucho de lo que he logrado en mi vida se lo debo a todo lo que me enseño, Dios nunca nos abandona, siempre podremos resurgir, siempre podremos salir a flote ante las adversidades, siempre podremos fortalecernos ante la oscuridad.
                Podría escribir un libro completo acerca de esta maravillosa mujer, pero las cosas van mas alla de las palabras, es un asunto de sentimientos y conexiones.
                Ya soy un hombre de 43 años, inmigrante desde hace 6 años en Estados Unidos, con una hermosa familia. Las circunstancias de mi vida me hicieron enfrentarme a nuevos retos, nuevas relaciones, nuevo hogar, nuevo idioma, pero he logrado superarlos todos, porque todo lo que aprendí con mi adorada profesora es algo con lo que contaré toda mi vida.
                Simplemente Gracias Mireya Pedroza, la quiero muchísimo y aunque la distancia y las ocupaciones no me permitan tener un contacto mas fluido y constante quiero que sepa que tiene todo mi cariño y afecto, Jamas la olvidare.
                Un abrazo a la distancia!' 
                // ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>
            </Row>
        </Container>
      </Container>
      </div>
  )
}

export default Testimony

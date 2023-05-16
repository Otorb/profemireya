import React from "react";
import ProjectCard from "./propCards";
import { Container, Row, Col } from "react-bootstrap";



function MaterialList() { 
  const url = "http://profemireyita.vercel.app"
  const alge =
    "https://img.freepik.com/vector-premium/formulas-cientificas-algebra-matematica-ecuacion-garabatos-signos-graficos-geometria-matematica_399998-300.jpg";
  const conc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpgE529aZzO-ske3gArczlmTbdOrXx2n0Ww&usqp=CAU";
  const conn =
    "https://i0.wp.com/lasmatesfaciles.com/wp-content/uploads/2020/10/image-7.png?resize=392%2C393&ssl=1";
  const conq =
    "https://slideplayer.es/slide/1126017/3/images/6/Conjunto+Q+%28N%C3%BAmeros+Racionales%29.jpg";
  
  const conr = "https://slideplayer.es/slide/14829978/90/images/10/5.+Conjunto+R+de+los+n%C3%BAmeros+reales.jpg"

  const conz = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIOOWzITscpopOm8-BBB62AjOF6-76FPcLw&usqp=CAU"

  const equdi = "https://www.monografias.com/trabajos97/introduccion-ecuaciones-diferenciales-teoria-y-ejemplos-resueltos/image004.png"

 const limi = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/L%C3%ADmite_01.svg/250px-L%C3%ADmite_01.svg.png"

 const deriv = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Recta_tangente_y_derivada.svg/1200px-Recta_tangente_y_derivada.svg.png"

const integ = "https://conceptodefinicion.de/wp-content/uploads/2014/05/Integral.jpg"

const trigon = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Trigonometria_02.svg/1200px-Trigonometria_02.svg.png"

  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={alge}
                isBlog={false}
                title="Algebra"
                description="Es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas acorde a ciertas reglas."
                 ghLink= "http://profemireyita.vercel.app/clases/algebra"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conc}
                isBlog={false}
                title="CONJUNTO C"
                description="El complemento de un conjunto o conjunto complementario es otro conjunto que contiene todos los elementos que no están en el conjunto original."
                 ghLink="http://profemireyita.vercel.app/clases/conjuntoc"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conn}
                isBlog={false}
                title="CONJUNTO N"
                description=" Un número natural es cualquiera de los números que se usan para contar los elementos de ciertos conjuntos. Los números naturales se representan con la ℕ = {1, 2, 3, 4, …} De dos números vecinos, el que se encuentra a la derecha se llama siguiente o sucesivo."
                 ghLink="http://profemireyita.vercel.app/clases/conjunton"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conq}
                isBlog={false}
                title="CONJUNTO Q"
                description="Está formado por todos aquellos númernos que podemos expresar mediante una fracción, también conocidos como quebrados."
                 ghLink="http://profemireyita.vercel.app/clases/conjuntoq"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conr}
                isBlog={false}
                title="CONJUNTO R"
                description="En matemáticas, el conjunto de los números reales (denotado por R ) incluye tanto los números racionales (positivos, negativos y el cero) como los números irracionales."
                 ghLink="http://profemireyita.vercel.app/clases/conjuntor"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={conz}
                isBlog={false}
                title="CONJUNTO Z"
                description= "El conjunto de números enteros (Z) está formado por los números naturales (1,2,3...) precedidos del signo mas (+), positivos, o menos (-), negativos, y el número entero cero, que se escribe sin signo."
                 ghLink="http://profemireyita.vercel.app/clases/conjuntoz"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={equdi}
                isBlog={false}
                title="Ecuación diferencial"
                description= "Una ecuación diferencial es una ecuación matemática que relaciona una función con sus derivadas."
                 ghLink="http://profemireyita.vercel.app/clases/ecuaciones"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={limi}
                isBlog={false}
                title="Límite"
                description="Es la clave de toque que formaliza la noción intuitiva de aproximación hacia un punto concreto de una sucesión o una función, a medida que los parámetros de esa sucesión o función se acercan a un determinado valor."
                 ghLink="http://profemireyita.vercel.app/clases/limite"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={deriv}
                isBlog={false}
                title="Derivada"
                description= "Es la razón de cambio instantánea con la que varía el valor de dicha función matemática, según se modifique el valor de su variable independiente."
                 ghLink="http://profemireyita.vercel.app/clases/derivada"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={integ}
                isBlog={false}
                title="Integrales"
                description = "Es una generalización de la suma de infinitos sumandos, infinitesimalmente pequeños: una suma continua."
                ghLink="http://profemireyita.vercel.app/clases/integrales"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={trigon}
                isBlog={false}
                title="Trigonometría"
                description="Es el estudio de las razones trigonométricas: seno, coseno, tangente, cotangente, secante y cosecante."
               ghLink="http://profemireyita.vercel.app/clases/trigonometria"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default MaterialList;

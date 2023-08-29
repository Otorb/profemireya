import React from 'react'
import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineWhatsApp,
   
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import whatsapp from '../../Assets/btnflo.png'
  import carta from '../../Assets/Maplewood.pdf'
  import youtube from '../../Assets/youtube.webp'

import About from '../About/About';
import TestiHome from '../TestiHome/TestiHome';
import MaterialHome from '../MaterialHome/MaterialHome'
import Clases from '../Clases/Clases';
import Footer from '../Footer/Footer';
import ContactHome from '../ContactHome/ContactHome';


function Home() {

  function onClick(e) {
    window.open(e.target.value)
  }

  return (
    <div className='homepagebackground homepagebackground2'>
    
      <div className='homepagebackground2'>
      <Container>
        <Row>
          <Col md={7}>
            {/* <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2> */}
            <h2 className='nametext'>¡Hola! Soy la Profesora Mireya Pedroza</h2>
            <span></span>
<h2 className='nametext'>Profesora de Matemáticas y Física</h2>
            
            <button onClick={() => {
              window.open("#");
            }}
              className='socailmediabtn'><img src={youtube} width="90px" height="90px" className='icon' /></button> 
              <br /><br />
           
            {/* <button onClick={() => {
              window.open("https://www.linkedin.com/in/rahulvijay81/"); 
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/rahulvijay8156");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/rahulvijay81");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button> */}
             
          </Col> 

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
      <a href="https://api.whatsapp.com/send?phone=584128270033">
        
        <img src={whatsapp} className="btn-flotante"/>
      </a>
      </div>
      <br />
      <About />
      <br />  
      <TestiHome />
      <br/>
      <Clases />
      <MaterialHome />
<ContactHome />
      <Footer />
    </div>
  )
}

export default Home

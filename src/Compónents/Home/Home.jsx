import React from 'react'
import '../../Pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";


function Home() {
  return (
    <div className='homepagebackground homepagebackground2'>
      <div className='homepagebackground2'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Soy la Profesora Mireya Pedroza</h2>
            <span></span>
            <Text />
            {/* <button onClick={() => {
              window.open("https://github.com/rahulvijay81");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
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
      </div>
    </div>
  )
}

export default Home

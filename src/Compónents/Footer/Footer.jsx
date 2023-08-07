import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import Logo from '../../Assets/logo.png'
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
      };
      
  return (
    <footer className='footerContent'>
        <img src={Logo} width="100px" height="80px" className="footer__logo" />
      {/* <a href="#home" >Meri-MG</a> */}
      <ul className="permalinks">
        {/* <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li> */}
      </ul>
      <div className="footer__socials">
      <BsWhatsapp size={30} />
      <BsInstagram size={30}/>
      <BsYoutube size={30}/>
      
 
      </div>
      <div className="footer__copyright">
        <small></small>
      </div>
    </footer>
  )
}

export default Footer
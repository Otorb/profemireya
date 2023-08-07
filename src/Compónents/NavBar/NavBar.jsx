import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../Pages/style.css'

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    };
  
    function scrollHandler() {
    if (window.scrollY >=   20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
    }
    }
  
    window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "sticky" : "navbar"}>


    <Navbar.Brand className='logotext' as={Link} to='/'>
      <div className='logo'></div>
    </Navbar.Brand>

    <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
      onClick={() => {
        updateExpanded(expand ? false : "expanded");
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>

      <Nav className="ms-auto" defaultActiveKey="#home">


        <Nav.Item>
          <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home </Nav.Link>
        </Nav.Item>
        <Nav.Item>
         
          <Nav.Link
           href='#about' 
            // as={Link}
            // to="/about"
            // onClick={() => updateExpanded(false)}
            onClick={() => onUpdateActiveLink("about")}
          >
            Sobre mi
          </Nav.Link>
          {/* <Nav.Link
            as={Link}
            to="/about"
            onClick={() => updateExpanded(false)}
          >
            Sobre mi
          </Nav.Link> */}
        </Nav.Item>

        <Nav.Item>
          <Nav.Link 
            as={Link}
            to="/testimony"
            onClick={() => updateExpanded(false)}
          >
            Testimonios
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link
           href='#ContactHome' 
            // as={Link}
            // to="/about"
            // onClick={() => updateExpanded(false)}
            onClick={() => onUpdateActiveLink("ContactHome")}
          >
            Contacto
          </Nav.Link>
          {/* <Nav.Link
            as={Link}
            to="/contact"
            onClick={() => updateExpanded(false)}
          >
            Contacto
          </Nav.Link> */}
        </Nav.Item>
        <Link to="/clases" style={{ cursor: "pointer" }}>
        <Button className='resumebtn'><span>Materiales</span>
        </Button>
        </Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  )
}

export default NavBar

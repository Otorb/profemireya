import './App.css';
import {Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import NavBar from './Compónents/NavBar/NavBar';
import Home from './Compónents/Home/Home';
import About from './Compónents/About/About';
import VideoTestimony from './Compónents/Video/VideoTestimonio'
import Login from './Compónents/Login/Login';
import CLase from './Compónents/Login/CLase';
import Conatact from './Compónents/Contact/Conatact';
import VideoClass from './Compónents/VideoClass/VideoClass'
import Algebra from './Compónents/Algebra/Algebra'
import ConjuntoC from "./Compónents/ConjuntoC/ConjuntoC";
import ConjuntoN from "./Compónents/ConjuntoN/ConjuntoN";
import ConjuntoQ from "./Compónents/ConjuntoQ/ConjuntoQ";
import ConjuntoR from "./Compónents/ConjuntoR/ConjuntoR";
import ConjuntoZ from "./Compónents/ConjuntoZ/ConjuntoZ";
import Ecuaciones from "./Compónents/Ecuaciones/Ecuaciones";
import Derivadas from "./Compónents/Derivadas/Derivadas";
import Integrales from "./Compónents/Integrales/Integrales";
import Limite from "./Compónents/Limite/Limite";
import Trigonometria from "./Compónents/Trigonometria/Trigonometria";

 
function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <NavBar />
       <Routes> 
       <Route path="/" element={<Home /> } />
       <Route path="/about" element={<About /> } />
       <Route path="/testimony" element={<VideoTestimony /> } />
       <Route path="/login" element={<Login /> } />
       <Route exact path="/contact" element={<Conatact />} />
       <Route exact path="/clases" element={<CLase />} />
       <Route exact path="/videoclass" element={<VideoClass />} />

       <Route exact path="/clases/algebra" element={<Algebra />} />
        <Route exact path="/clases/conjuntoc" element={<ConjuntoC />} />
        <Route exact path="/clases/conjunton" element={<ConjuntoN />} />
        <Route exact path="/clases/conjuntoq" element={<ConjuntoQ />} />
        <Route exact path="/clases/conjuntor" element={<ConjuntoR />} />
        <Route exact path="/clases/conjuntoz" element={<ConjuntoZ />} />
        <Route exact path="/clases/ecuaciones" element={<Ecuaciones />} />
        <Route exact path="/clases/derivada" element={<Derivadas />} />
        <Route exact path="/clases/integrales" element={<Integrales />} />
        <Route exact path="/clases/limite" element={<Limite />} />
        <Route exact path="/clases/trigonometria" element={<Trigonometria />} />
      </Routes> 
    </div>
  );
}

export default App;

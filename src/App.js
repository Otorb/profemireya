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
      </Routes> 
    </div>
  );
}

export default App;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre nosotros</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

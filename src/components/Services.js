import React from 'react';
import { Helmet } from 'react-helmet';  // Importa Helmet de react-helmet

function Services() {
    return (
      <div className="content-container">
        <Helmet>
        <title>Servicios</title>  // Establece el título de la página
      </Helmet>
        <h1>Servicios</h1>
        <p>Aquí están nuestros servicios destacados.</p>
      </div>
    );
  }
  
  export default Services;
  
import React from 'react';
import { Helmet } from 'react-helmet';  // Importa Helmet de react-helmet

function About() {
  return (
    <div className="content-container">
      <Helmet>
        <title>Sobre nosotros - Mi Empresa</title>  // Establece el título de la página
      </Helmet>
      <h1>Sobre nosotros</h1>
      <p>Esta es la página sobre nuestra empresa.</p>
    </div>
  );
}

export default About;

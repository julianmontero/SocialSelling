import React from 'react';
import { Helmet } from 'react-helmet';  // Importa Helmet de react-helmet

function Home() {
    return (
      <div className="content-container">
         <Helmet>
                <title>Mi Empresa</title>  // Establece el título de la página
              </Helmet>
        <h1>Inicio</h1>
        <p>Bienvenido a nuestra página principal.</p>
      </div>
    );
  }
  
  export default Home;
  
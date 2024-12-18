import React from 'react';
import { Helmet } from 'react-helmet';  // Importa Helmet de react-helmet

function Contact() {
    return (
      <div className="content-container">
        <Helmet>
                <title>Contacto</title>  // Establece el título de la página
              </Helmet>
        <h1>Contacto</h1>
        <p>Puedes contactarnos a través de esta página.</p>
      </div>
    );
  }
  
  export default Contact;
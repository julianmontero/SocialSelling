import React from 'react';
import './Footer.css';  // Asegúrate de crear y enlazar el archivo CSS correspondiente.

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        <p>Síguenos en nuestras redes sociales.</p>
        <ul className="social-links">
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

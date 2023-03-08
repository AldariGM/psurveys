import React from "react";
//css
import './footer.css'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Psurveys</h1>
            
        <h2>Contacto</h2>
        
        <address>
          5534 Somewhere In. The World 22193-10212
          <br/>
          <a className="footer__btn" href="mailto:example@gmail.com">Enviar Correo</a>
        </address>
      </div>
      
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="#">Online</a>
            </li>
            <li>
              <a href="#">Print</a>
            </li>
            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>
        
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Tecnología</h2>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Hardware Design</a>
            </li>
            <li>
              <a href="#">Software Design</a>
            </li>
            <li>
              <a href="#">Digital Signage</a>
            </li>
            <li>
              <a href="#">Automation</a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">IoT</a>
            </li>
          </ul>
        </li>
        
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              <a href="#">Politica de Privacidad</a>
            </li>
            <li>
              <a href="#">Terminos de uso</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
      
      <div className="legal">
        <p>&copy; 2023 Psurveys. All rights reserved.</p>
        
        <div className="legal__links">
          <span>Desarrollado por: </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

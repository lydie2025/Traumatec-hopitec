import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TRAUMATEC/HOPITEC</h3>
            <p>Technologies pour les urgences et la traumatologie</p>
            <p>Technologies et ingénieries hospitalières</p>
            <p>CAMEROUN</p>
          </div>
          
          <div className="footer-section">
            <h3>Nos Services</h3>
            <p><a href="/services">Technologies de traumatologie</a></p>
            <p><a href="/services">Technologies hospitalières</a></p>
            <p><a href="/services">Formations médicales</a></p>
            <p><a href="/services">Services Web & Informatiques</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📧 info@traumatec-hopitec.cm</p>
            <p>📞 +237 XXX XXX XXX</p>
            <p>📍 Yaoundé, Cameroun</p>
          </div>
          
          <div className="footer-section">
            <h3>Liens Rapides</h3>
            <p><a href="/">Accueil</a></p>
            <p><a href="/services">Services</a></p>
            <p><a href="/about">À Propos</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 TRAUMATEC/HOPITEC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* === Colonne Logo & Contact === */}
        <div className="footer-section">
          <img src="/logo.jpeg" alt="Annuaire Medicale" className="footer-logo" />
          <p className="email">annuaire@gmail.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"> 
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* === Colonne Services === */}
        <div className="footer-section">
          <h3>
            <a href="/services">Liens rapides</a>
          </h3>
          <ul>
            <li>Accueil</li>
            <li>A propos de l'annuaire</li>
            <li>Nos services</li>
            <li>Annonces</li>
            <li>Publicités</li>
          </ul>
        </div>

        {/* === Colonne Projets === */}
        <div className="footer-section">
          <h3>
            <a href="/projets">Bon à savoir</a>
          </h3>
          <ul>
            <li>Editeur</li>
            <li>Mentions légales</li>
            <li>Clauses de confidentialité</li>
            <li>Contactez-nous</li>
            <li>Nos tarifs</li>
          </ul>
        </div>

        {/* === Colonne Newsletter === */}
        <div className="footer-section">
          <h3>Subscribe Newsletter</h3>
          <p>Inscrivez-vous pour recevoir nos actualités.</p>
          <div className="newsletter">
            <input type="email" placeholder="Votre email" />
            <button type="submit">➤</button>
          </div>
        </div>
      </div>

      {/* === Copyright === */}
      <div className="footer-bottom">
        <p>© 2025 Annuaire Medicale du Cameroun — Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

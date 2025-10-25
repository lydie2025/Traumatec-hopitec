import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Annuaire Médical du Cameroun" />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/presentation">Présentation</Link>
        </li>

        <li className="dropdown">
          <span>Services ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/services/hopitaux">Annuaire médical</Link></li>
            <li><Link to="/services/pharmacies">E-marketing</Link></li>
            <li><Link to="/services/pharmacies">Agenda médical</Link></li>
            <li><Link to="/services/medecins">petites annonces</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/tarifs">Tarifs</Link>
        </li>

        <li>
          <Link to="/abonnes">Espace abonnés</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={{
        backgroundColor: 'var(--primary-blue)',
        color: 'white',
        fontSize: '0.9rem',
        padding: '0.35rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            CAMEROUN • Technologies pour les urgences et la traumatologie
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="tel:+237000000000" style={{ color: 'white' }}>📞 +237 000 000 000</a>
            <a href="mailto:info@traumatec-hopitec.cm" style={{ color: 'white' }}>✉️ info@traumatec-hopitec.cm</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo size="small" showText={true} />
          </Link>
          
          <div className={`navbar-nav-container ${isMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="navbar-nav">
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={isActive('/services') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Lumora Zunpeta" className="logo" loading="lazy" />
        </Link>
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" onClick={closeMenu}>
            Início
          </Link>
          <Link to="/produtos" onClick={closeMenu}>
            Produtos
          </Link>
          <Link to="/sobre" onClick={closeMenu}>
            Sobre
          </Link>
          <Link to="/contato" onClick={closeMenu}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

import { useState } from 'react';

import logo from '../../assets/logo.svg';

import './header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Lumora Zunpeta" className="logo" />
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
        <nav className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#produtos" onClick={() => setIsMenuOpen(false)}>
            Produtos
          </a>
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

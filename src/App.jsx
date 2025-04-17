import './App.css';
import LumoraLogo from './assets/lumora.svg';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="app-header">
        <img src={LumoraLogo} alt="Lumora Logo" className="logo" />

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#">Início</a>
          <a href="#">Produtos</a>
          <a href="#">Contato</a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>
    </>
  );
}

export default App;

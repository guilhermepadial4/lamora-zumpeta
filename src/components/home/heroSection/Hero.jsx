import { Link } from 'react-router-dom';
import HeroImage from '../../../assets/img/phone.webp';
import './hero.scss';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-image-container">
        <img
          src={HeroImage}
          alt="Dois smartphones flutuando com design minimalista e tela vibrante"
          className="hero-background-image"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <div className="hero-content">
        <h1 id="hero-heading">Smartphones com Inovação e Design Premium</h1>
        <p>Conheça a nova geração Lumora Zunpeta: performance de ponta com um visual elegante e moderno.</p>
        <Link to="/produtos" className="hero-button">
          Conheça os Modelos
        </Link>
      </div>
    </section>
  );
}

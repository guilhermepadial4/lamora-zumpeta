import { Link } from 'react-router-dom';

import HeroImage from '../../../assets/img/phone.png';

import './hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={HeroImage} alt="Dois smartphones flutuando com design minimalista e tela vibrante" className="hero-background-image" />
      </div>
      <div className="hero-content">
        <h1>Descubra a Elegância e Inovação dos Novos Smartphones</h1>
        <p>
          Design sofisticado, performance excepcional e a mais recente tecnologia mobile. Explore a coleção Lumora Zunpeta e eleve sua
          experiência.
        </p>
        <Link to="/produtos" className="hero-button">
          Conheça os Modelos
        </Link>
      </div>
    </section>
  );
}

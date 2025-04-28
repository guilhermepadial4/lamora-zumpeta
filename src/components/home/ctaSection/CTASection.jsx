import { Link } from 'react-router-dom';

import './ctaSection.scss';

export function CTASection() {
  return (
    <section className="cta-section premium-minimal"> 
      <div className="container">
        <h2>Explore a Coleção Lumora</h2> 
        <p className="cta-description">
          Descubra smartphones com design inovador e tecnologia de ponta.
        </p>
        <Link to="/produtos" className="cta-button elegant">
          Ver Seleção
        </Link>
      </div>
    </section>
  );
}
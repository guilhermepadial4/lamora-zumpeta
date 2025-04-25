import './ctaSection.scss';

export function CTASection() {
  return (
    <section className="cta-section premium-minimal"> {/* Nova classe para o estilo */}
      <div className="container">
        <h2>Explore a Coleção Lumora</h2> {/* Título conciso e premium */}
        <p className="cta-description">
          Descubra smartphones com design inovador e tecnologia de ponta.
        </p>
        <a href="#celulares" className="cta-button elegant"> {/* Botão elegante */}
          Ver Seleção
        </a>
      </div>
    </section>
  );
}
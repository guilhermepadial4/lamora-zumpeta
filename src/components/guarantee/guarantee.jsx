import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import './guarantee.scss';

export function Guarantee() {
  return (
    <div className="guarantee-page refined-minimal">
      <Header />

      <main className="guarantee-main">
        <div className="container">
          <section className="guarantee-intro">
            <h1 className="guarantee-intro__title">Garantia Lumora Zunpeta</h1>
            <p className="guarantee-intro__text">
              Na Lumora Zunpeta, confiança e qualidade caminham lado a lado. Por isso, todos os nossos produtos contam com garantias
              exclusivas que asseguram sua tranquilidade após a compra.
            </p>
          </section>

          <section className="guarantee-details">
            <div className="guarantee-card">
              <h2 className="guarantee-card__title">Garantia ZetaPrime</h2>
              <p className="guarantee-card__text">
                Todos os dispositivos contam com até <strong>12 meses de garantia total</strong> contra defeitos de fabricação, com
                reposição imediata ou reparo via nossa Rede Autorizada ZetaPrime.
              </p>
            </div>

            <div className="guarantee-card">
              <h2 className="guarantee-card__title">Proteção Ultraviolet</h2>
              <p className="guarantee-card__text">
                Nossos vidros são cobertos com a camada Ultraviolet, que garante <strong>proteção contra riscos acidentais</strong> por até
                6 meses após a compra. Substituição rápida mediante análise técnica.
              </p>
            </div>

            <div className="guarantee-card">
              <h2 className="guarantee-card__title">Suporte Premium Orbital</h2>
              <p className="guarantee-card__text">
                Ao adquirir qualquer produto da linha Lumora Orbital, você conta com <strong>atendimento prioritário</strong> via nosso
                canal Premium. Soluções em até 48h úteis garantidas por contrato.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import './faq.scss';

export function Faq() {
  return (
    <div className="faq-page refined-minimal">
      <Header />

      <main className="faq-main">
        <div className="container">
          <section className="faq-intro">
            <h1 className="faq-intro__title">Perguntas Frequentes</h1>
            <p className="faq-intro__text">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossos produtos, garantias e suporte. Estamos aqui para garantir
              sua melhor experiência com a Lumora Zunpeta.
            </p>
          </section>

          <section className="faq-list">
            <div className="faq-item">
              <h2 className="faq-item__question">Qual o prazo de entrega dos produtos?</h2>
              <p className="faq-item__answer">
                O prazo médio de entrega varia de 3 a 7 dias úteis, dependendo da sua localização. Enviamos para todo o Brasil com
                rastreamento em tempo real via Painel Lumora.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-item__question">Posso trocar meu dispositivo caso não goste?</h2>
              <p className="faq-item__answer">
                Sim. Você pode solicitar a troca em até 7 dias após o recebimento, sem custos, conforme a nossa Política de Satisfação
                Garantida Zunpeta.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-item__question">Os celulares são novos e originais?</h2>
              <p className="faq-item__answer">
                Todos os nossos dispositivos são 100% originais, lacrados de fábrica e homologados pela Anatel, com nota fiscal e garantia
                oficial.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-item__question">Como funciona o suporte técnico?</h2>
              <p className="faq-item__answer">
                Oferecemos suporte técnico via chat, e-mail e telefone. Clientes da linha Lumora Orbital têm acesso ao canal Premium Orbital
                com atendimento em até 48h úteis.
              </p>
            </div>

            <div className="faq-item">
              <h2 className="faq-item__question">Onde acompanho minha compra?</h2>
              <p className="faq-item__answer">
                Acompanhe sua compra em tempo real no <strong>Painel Lumora</strong>, usando seu e-mail e número do pedido. Você será
                notificado por e-mail a cada etapa do envio.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

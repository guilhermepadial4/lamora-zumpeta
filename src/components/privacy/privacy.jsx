import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import './privacy.scss';

export function Privacy() {
  return (
    <div className="privacy-page refined-minimal">
      <Header />

      <main className="privacy-main">
        <div className="container">
          <section className="privacy-content">
            <h1 className="privacy-title">Política de Privacidade</h1>
            <p className="privacy-updated">Última atualização: 28 de Abril de 2025</p>

            <h2>1. Compromisso com a sua Privacidade</h2>
            <p>
              Na Lumora Zunpeta, valorizamos a sua confiança. Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos
              as suas informações pessoais ao usar nosso site.
            </p>

            <h2>2. Informações que Coletamos</h2>
            <p>
              Podemos coletar informações como nome, e-mail, endereço, telefone, dados de pagamento e comportamento de navegação para
              melhorar sua experiência de compra e garantir segurança nas transações.
            </p>

            <h2>3. Uso das Informações</h2>
            <p>
              Utilizamos seus dados para processar pedidos, fornecer suporte, personalizar conteúdo e enviar comunicações relacionadas a
              promoções e atualizações, sempre respeitando suas preferências.
            </p>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
              Seus dados não serão vendidos ou divulgados a terceiros, exceto em casos necessários para o funcionamento da plataforma, como
              gateways de pagamento ou serviços logísticos, sempre sob contrato de confidencialidade.
            </p>

            <h2>5. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Utilizamos cookies para analisar o tráfego e otimizar sua experiência. Você pode gerenciar essas permissões diretamente no seu
              navegador.
            </p>

            <h2>6. Segurança da Informação</h2>
            <p>
              Aplicamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou uso indevido.
              Toda navegação em nosso site é criptografada com tecnologia SSL.
            </p>

            <h2>7. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir seus dados pessoais. Para exercer esses direitos, entre em contato conosco
              em: <a href="mailto:privacidade@lumorazunpeta.com.br">privacidade@lumora.com</a>.
            </p>

            <h2>8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Sempre que isso ocorrer, a data de revisão será modificada no topo desta
              página.
            </p>

            <h2>9. Contato</h2>
            <p>Caso tenha dúvidas sobre esta Política de Privacidade, fale com a gente pelo e-mail: suporte@lumorazunpeta.com.br.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

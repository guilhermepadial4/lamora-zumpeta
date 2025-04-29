import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import './terms.scss';

export function Terms() {
  return (
    <div className="terms-page refined-minimal">
      <Header />

      <main className="terms-main">
        <div className="container">
          <section className="terms-content">
            <h1 className="terms-title">Termos de Uso</h1>
            <p className="terms-updated">Última atualização: 28 de Abril de 2025</p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o site da Lumora Zunpeta, você concorda com os presentes Termos de Uso. Se você não concorda com alguma parte
              destes termos, por favor, não utilize nossos serviços.
            </p>

            <h2>2. Sobre a Lumora Zunpeta</h2>
            <p>
              A Lumora Zunpeta é uma plataforma especializada em tecnologia de dispositivos móveis, oferecendo uma experiência única de
              compra com foco em qualidade, segurança e performance.
            </p>

            <h2>3. Uso da Plataforma</h2>
            <p>
              Ao utilizar nosso site, você concorda em fornecer informações verdadeiras, não violar direitos de terceiros e não utilizar a
              plataforma para fins ilícitos. Reservamo-nos o direito de suspender ou cancelar contas que violem esses termos.
            </p>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todos os elementos visuais, textos, imagens, códigos e funcionalidades do site são propriedade exclusiva da Lumora Zunpeta e
              protegidos por leis de direitos autorais e marcas registradas.
            </p>

            <h2>5. Política de Compras</h2>
            <p>
              As compras feitas na Lumora Zunpeta estão sujeitas à nossa Política Comercial, incluindo condições de pagamento, envio, trocas
              e garantias. Recomendamos a leitura completa da <a href="/garantia">página de Garantias</a>.
            </p>

            <h2>6. Limitação de Responsabilidade</h2>
            <p>
              Embora nos esforcemos para garantir uma experiência perfeita, a Lumora Zunpeta não se responsabiliza por eventuais falhas
              técnicas, indisponibilidades temporárias ou erros de terceiros.
            </p>

            <h2>7. Modificações dos Termos</h2>
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento. É responsabilidade do usuário revisá-los periodicamente. O uso
              contínuo da plataforma após alterações constitui aceitação das novas condições.
            </p>

            <h2>8. Contato</h2>
            <p>Para dúvidas ou sugestões, entre em contato com nosso time pelo e-mail: suporte@lumora.com</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

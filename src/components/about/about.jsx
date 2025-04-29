import { AiOutlineRocket, AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDeliveryDining, MdHeadsetMic, MdSecurity } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

import './about.scss';

export function About() {
  return (
    <div className="about-page professional">
      <Header />

      <main className="about-main">
        <div className="container">
          <section className="about-intro">
            <h1 className="about-intro__title">Sobre a Lumora Zunpeta: Inovação e Confiança em Tecnologia Mobile</h1>
            <p className="about-intro__text">
              Na Lumora Zunpeta, nossa paixão por tecnologia impulsiona cada decisão. Fundada com o objetivo de oferecer uma experiência de
              compra de smartphones excepcional, combinamos uma seleção cuidadosamente curada de dispositivos de alta qualidade com um
              compromisso inabalável com a satisfação do cliente.
            </p>
            <p className="about-intro__text">
              Acreditamos que adquirir um novo smartphone deve ser uma jornada transparente e agradável. Por isso, dedicamos nossos esforços
              para garantir que você encontre o dispositivo perfeito, com informações claras, suporte especializado e a segurança de uma
              compra bem-sucedida.
            </p>
          </section>

          <section className="about-values">
            <h2 className="about-values__title">Nossos Compromissos</h2>
            <ul className="about-values__list">
              <li className="about-values__item">
                <AiOutlineCheckCircle size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Qualidade Premium</h3>
                <p className="about-values__item-text">
                  Selecionamos apenas smartphones de marcas renomadas, garantindo desempenho superior e durabilidade.
                </p>
              </li>
              <li className="about-values__item">
                <FaMobileAlt size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Curadoria Especializada</h3>
                <p className="about-values__item-text">
                  Nossa equipe acompanha as últimas tendências para oferecer os modelos mais inovadores e relevantes do mercado.
                </p>
              </li>
              <li className="about-values__item">
                <MdDeliveryDining size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Entrega Segura e Rápida</h3>
                <p className="about-values__item-text">
                  Parcerias logísticas eficientes para que sua compra chegue com segurança e no menor tempo possível.
                </p>
              </li>
              <li className="about-values__item">
                <MdHeadsetMic size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Suporte ao Cliente Dedicado</h3>
                <p className="about-values__item-text">
                  Nossa equipe está pronta para auxiliar em todas as etapas, desde a escolha do produto até o pós-venda.
                </p>
              </li>
              <li className="about-values__item">
                <MdSecurity size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Compra Segura e Protegida</h3>
                <p className="about-values__item-text">
                  Utilizamos as mais recentes tecnologias de segurança para garantir a proteção dos seus dados e pagamentos.
                </p>
              </li>
              <li className="about-values__item">
                <AiOutlineRocket size={32} className="about-values__icon" />
                <h3 className="about-values__item-title">Visão de Futuro</h3>
                <p className="about-values__item-text">
                  Estamos sempre buscando inovações para aprimorar nossos serviços e oferecer o melhor em tecnologia mobile.
                </p>
              </li>
            </ul>
          </section>

          <section className="about-mission-vision">
            <div className="about-mission">
              <h2 className="about-mission__title">Nossa Missão</h2>
              <p className="about-mission__text">
                Empoderar nossos clientes com acesso a tecnologia mobile de ponta, proporcionando uma experiência de compra online
                excepcional, marcada pela confiança, transparência e suporte dedicado.
              </p>
            </div>
            <div className="about-vision">
              <h2 className="about-vision__title">Nossa Visão</h2>
              <p className="about-vision__text">
                Ser a principal referência no mercado de tecnologia mobile, reconhecida pela excelência em produtos, atendimento e inovação
                contínua, construindo relacionamentos duradouros com nossos clientes.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

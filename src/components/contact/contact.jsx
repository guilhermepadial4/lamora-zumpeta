import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './contact.scss';
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="contact-page refined-minimal">
      <Header />
      <main className="contact-main">
        <div className="container">
          <section className="contact-intro">
            <h1 className="contact-intro__title">Entre em Contato</h1>
            <p className="contact-intro__text">
              Estamos à disposição para ajudar. Utilize o formulário abaixo ou entre em contato diretamente através dos nossos canais.
            </p>
          </section>
          <section className="contact-content">
            <div className="contact-form-wrapper">
              <h2 className="contact-form__title">Formulário de Contato</h2>
              <form className="form">
                <div className="form__group">
                  <label htmlFor="name" className="form__label">
                    Nome
                  </label>
                  <input type="text" id="name" className="form__input" placeholder="Seu Nome" required />
                </div>
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input type="email" id="email" className="form__input" placeholder="Seu Email" required />
                </div>
                <div className="form__group">
                  <label htmlFor="subject" className="form__label">
                    Assunto
                  </label>
                  <input type="text" id="subject" className="form__input" placeholder="Assunto" />
                </div>
                <div className="form__group form__group--textarea">
                  <label htmlFor="message" className="form__label">
                    Mensagem
                  </label>
                  <textarea id="message" className="form__textarea" rows="5" placeholder="Sua Mensagem" required></textarea>
                </div>
                <button type="submit" className="button">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h2 className="contact-info__title">Informações de Contato</h2>
              <ul className="contact-info__list">
                <li className="contact-info__item">
                  <HiOutlineMapPin size={20} className="contact-info__icon" />
                  <span>Endereço:</span> Alameda dos Inventores, 500 - Vila da Imaginação, São Paulo - SP
                </li>
                <li className="contact-info__item">
                  <HiOutlineEnvelope size={20} className="contact-info__icon" />
                  <span>Email:</span> contato@lumora.com
                </li>
                <li className="contact-info__item">
                  <HiOutlinePhone size={20} className="contact-info__icon" />
                  <span>Telefone:</span> (11) 4578-9852
                </li>
                <li className="contact-info__item">
                  <FaWhatsapp size={20} className="contact-info__icon" />
                  <span>WhatsApp:</span> (11) 95275-6579
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

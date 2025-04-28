import './footer.scss';
import logo from '../../assets/logo.svg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="footer premium-minimal-dark">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo Lumora Zunpeta" />
        </div>

        <div className="footer-links">
          <div className="footer-column models">
            <h4>Modelos</h4>
            <ul>
              <li>
                <a href="#modelo1">Lumora Edge Pro</a>
              </li>
              <li>
                <a href="#modelo2">Lumora Zenith X Plus</a>
              </li>
              <li>
                <a href="#modelo3">Lumora Zenith X</a>
              </li>
              <li>
                <a href="#modelo4">Lumora Edge</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Core S</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Start 2</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Tab M10</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Tab X12 Pro</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Book E14</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Book M15</a>
              </li>

              <li>
                <a href="#modelo4">Lumora Core X</a>
              </li>

              <li>
                <a href="#modelo4">Headphone Lumora SoundWave X</a>
              </li>

              <li>
                <a href="#modelo4">SoundBuds Air</a>
              </li>

              <li>
                <a href="#modelo4">PowerMini 5000</a>
              </li>
            </ul>
          </div>

          <div className="footer-column institutional">
            <h4>Institucional</h4>
            <ul>
              <li>
                <a href="#sobre">Sobre a Lumora</a>
              </li>
              <li>
                <a href="#garantia">Garantia</a>
              </li>
              <li>
                <a href="#suporte">Suporte</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="mailto:contato@lumora.com">contato@lumora.com</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lumora Zunpeta. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

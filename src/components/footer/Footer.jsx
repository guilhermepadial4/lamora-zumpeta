import { Link } from 'react-router-dom';
import './footer.scss';
import logo from '../../assets/logo.svg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { products } from '../../data/products';

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
                {products.find((p) => p.name === 'Lumora Edge Pro') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Edge Pro')?.slug}`}>Lumora Edge Pro</Link>
                ) : (
                  <a href="#modelo1">Lumora Edge Pro</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Zenith X Plus') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Zenith X Plus')?.slug}`}>Lumora Zenith X Plus</Link>
                ) : (
                  <a href="#modelo2">Lumora Zenith X Plus</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Zenith X') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Zenith X')?.slug}`}>Lumora Zenith X</Link>
                ) : (
                  <a href="#modelo3">Lumora Zenith X</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Edge') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Edge')?.slug}`}>Lumora Edge</Link>
                ) : (
                  <a href="#modelo4">Lumora Edge</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Core S') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Core S')?.slug}`}>Lumora Core S</Link>
                ) : (
                  <a href="#modelo4">Lumora Core S</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Start 2') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Start 2')?.slug}`}>Lumora Start 2</Link>
                ) : (
                  <a href="#modelo4">Lumora Start 2</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Tab M10') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Tab M10')?.slug}`}>Lumora Tab M10</Link>
                ) : (
                  <a href="#modelo4">Lumora Tab M10</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Tab X12 Pro') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Tab X12 Pro')?.slug}`}>Lumora Tab X12 Pro</Link>
                ) : (
                  <a href="#modelo4">Lumora Tab X12 Pro</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Book E14') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Book E14')?.slug}`}>Lumora Book E14</Link>
                ) : (
                  <a href="#modelo4">Lumora Book E14</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Book M15') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Book M15')?.slug}`}>Lumora Book M15</Link>
                ) : (
                  <a href="#modelo4">Lumora Book M15</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Lumora Core X') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Lumora Core X')?.slug}`}>Lumora Core X</Link>
                ) : (
                  <a href="#modelo4">Lumora Core X</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'Headphone Lumora SoundWave X') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'Headphone Lumora SoundWave X')?.slug}`}>
                    Headphone Lumora SoundWave X
                  </Link>
                ) : (
                  <a href="#modelo4">Headphone Lumora SoundWave X</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'SoundBuds Air') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'SoundBuds Air')?.slug}`}>SoundBuds Air</Link>
                ) : (
                  <a href="#modelo4">SoundBuds Air</a>
                )}
              </li>
              <li>
                {products.find((p) => p.name === 'PowerMini 5000') ? (
                  <Link to={`/produto/${products.find((p) => p.name === 'PowerMini 5000')?.slug}`}>PowerMini 5000</Link>
                ) : (
                  <a href="#modelo4">PowerMini 5000</a>
                )}
              </li>
            </ul>
          </div>

          <div className="footer-column institutional">
            <h4>Institucional</h4>
            <ul>
              <li>
                <Link to="/sobre">Sobre a Lumora</Link>
              </li>
              <li>
              <Link to="/garantia">Garantia</Link>
              </li>
              <li>
              <Link to="/contato">Suporte</Link>
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

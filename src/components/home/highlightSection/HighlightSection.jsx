import './highlightSection.scss';

import ZenithX from '../../../assets/img/zenithx.png';
import ZenithP from '../../../assets/img/zenithp.png';
import EdgePro from '../../../assets/img/edgep.png';

const phones = [
  {
    name: 'Lumora Zenith X',
    image: ZenithX,
    alt: 'Smartphone premium Lumora Zenith X com tela AMOLED LTPO e câmera tripla com IA',
    description:
      'Desempenho Snapdragon 8 Gen 3, tela AMOLED LTPO QHD+ de 120 Hz e câmera tripla de 50MP com IA. Experimente a velocidade e a qualidade visual.',
    link: '/lumora-z1',
  },
  {
    name: 'Lumora Zenith X Plus',
    image: ZenithP,
    alt: 'Smartphone ultra premium Lumora Zenith X Plus com câmera ZEISS de 200MP e tela AMOLED LTPO 2.0 de 144 Hz',
    description:
      'Ultra Premium com câmeras ZEISS de 200MP, tela AMOLED LTPO 2.0 de 144 Hz e carregamento de 100W. O máximo em tecnologia e design.',
    link: '/lumora-z2',
  },
  {
    name: 'Lumora Edge Pro',
    image: EdgePro,
    alt: 'Smartphone de entrada premium Lumora Edge Pro com tela FHD+ de 90 Hz e câmera de 50MP com IA',
    description:
      'Entrada Premium com tela FHD+ de 90 Hz, câmera de 50MP com IA e bateria de 5000 mAh. A experiência Lumora com o melhor custo-benefício.',
    link: '/lumora-z3-ultra',
  },
];

export function HighlightSection() {
  return (
    <section className="highlight-section">
      <h2>Descubra a Coleção Lumora Zunpeta</h2>
      <p className="section-description">
        Explore nossos smartphones com design minimalista, tecnologia de ponta e performance excepcional.
      </p>

      <div className="highlight-grid">
        {phones.map((phone) => (
          <a href={phone.link} className="phone-card" key={phone.name} aria-label={`Saiba mais sobre o ${phone.name}`}>
            <div className="image-container">
              <img src={phone.image} alt={phone.alt} />
            </div>
            <h3>{phone.name}</h3>
            <p className="short-description">{phone.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

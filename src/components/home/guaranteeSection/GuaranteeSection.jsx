import './guaranteeSection.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { ShieldCheck, PackageCheck, Headphones, Clock } from 'lucide-react';

const guarantees = [
  {
    icon: <ShieldCheck size={40} />,
    title: 'Compra Segura',
    description: 'Criptografia SSL e checkout verificado.',
    alt: 'Ícone de escudo com checkmark para compra segura',
  },
  {
    icon: <PackageCheck size={40} />,
    title: 'Entrega Garantida',
    description: 'Receba no prazo ou tenha seu dinheiro de volta.',
    alt: 'Ícone de pacote com checkmark para entrega garantida',
  },
  {
    icon: <Headphones size={40} />,
    title: 'Suporte Rápido',
    description: 'Equipe disponível para ajudar você.',
    alt: 'Ícone de fones de ouvido para suporte rápido',
  },
  {
    icon: <Clock size={40} />,
    title: '12 Meses de Garantia',
    description: 'Garantia total de fábrica em todos os aparelhos.',
    alt: 'Ícone de relógio para garantia de 12 meses',
  },
];

export function GuaranteeSection() {
  return (
    <section className="guarantee-section minimalist">
      <div className="container">
        <h2>Nossa Garantia</h2>
        <div className="guarantees-grid">
          {guarantees.map((item, index) => (
            <div className="guarantee-card" key={index}>
              <div className="icon" aria-label={item.alt}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
        <Swiper
          className="swiper-container-mobile"
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              enabled: false,
            },
          }}
        >
          {guarantees.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="guarantee-card">
                <div className="icon" aria-label={item.alt}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

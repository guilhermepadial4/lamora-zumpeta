import './testimonialSection.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Woman from '../../../assets/img/testimonials/woman.jpg';
import Woman2 from '../../../assets/img/testimonials/woman2.jpg';
import Woman3 from '../../../assets/img/testimonials/woman3.jpg';
import Men from '../../../assets/img/testimonials/men.jpg';
import Men2 from '../../../assets/img/testimonials/men2.jpg';

const testimonials = [
  {
    name: 'Carla Mendes',
    location: 'São Paulo, SP',
    avatar: Woman,
    alt: 'Depoimento de Carla Mendes, cliente satisfeita Lumora',
    quote: 'Fiquei impressionada com a qualidade e desempenho do meu Zunpeta. O design é lindo e o custo-benefício não tem igual!',
    rating: 5,
  },
  {
    name: 'Renato Alves',
    location: 'Belo Horizonte, MG',
    avatar: Men,
    alt: 'Avaliação de Renato Alves sobre o atendimento Lumora',
    quote: 'Atendimento excelente e entrega super rápida. A Lumora realmente se preocupa com o cliente!',
    rating: 5,
  },
  {
    name: 'Juliana Rocha',
    location: 'Recife, PE',
    avatar: Woman2,
    alt: 'Opinião de Juliana Rocha sobre a potência do smartphone Lumora',
    quote: 'O celular chegou em perfeito estado e é muito mais potente do que eu esperava. Recomendo demais!',
    rating: 4,
  },
  {
    name: 'Thiago Costa',
    location: 'Curitiba, PR',
    avatar: Men2,
    alt: 'Experiência de compra segura e tranquila de Thiago Costa na Lumora',
    quote: 'Já comprei dois Zunpetas aqui pra mim e minha esposa. Nunca tive uma experiência tão tranquila e segura!',
    rating: 5,
  },
  {
    name: 'Beatriz Farias',
    location: 'Fortaleza, CE',
    avatar: Woman3,
    alt: 'Review de Beatriz Farias destacando a bateria e as câmeras do Zunpeta',
    quote: 'Simplesmente amei meu novo Zunpeta! Bateria durando muito e câmeras incríveis!',
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="testimonial-section mobile-carousel-only">
      <div className="container">
        <h2>O que nossos clientes dizem sobre a Lumora</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote className="testimonial-card" key={t.name}>
              <div className="avatar">
                <img src={t.avatar} alt={t.alt} loading="lazy" />
              </div>
              <div className="content">
                <p className="quote">“{t.quote}”</p>
                <cite className="info">
                  <span className="name">{t.name}</span>
                  <span className="location">{t.location}</span>
                </cite>
                <div className="rating" aria-label={`Avaliação de ${t.name}: ${t.rating} de 5 estrelas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < t.rating ? 'filled' : ''} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </blockquote>
          ))}
        </div>
        <Swiper
          className="swiper-container-mobile"
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            768: {
              enabled: false,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <blockquote className="testimonial-card">
                <div className="avatar">
                  <img src={t.avatar} alt={t.alt} loading="lazy" />
                </div>
                <div className="content">
                  <p className="quote">“{t.quote}”</p>
                  <cite className="info">
                    <span className="name">{t.name}</span>
                    <span className="location">{t.location}</span>
                  </cite>
                  <div className="rating" aria-label={`Avaliação de ${t.name}: ${t.rating} de 5 estrelas`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < t.rating ? 'filled' : ''} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

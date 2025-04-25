import './features.scss';
import { CheckCircle, Zap, Shield } from 'lucide-react';

export function Features() {
  return (
    <section className="features">
      <h2>Por que escolher a Lumora Zunpeta?</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <Zap size={40} />
          <h3>Performance de ponta</h3>
          <p>Dispositivos rápidos e otimizados para quem exige o melhor.</p>
        </div>
        <div className="feature-card">
          <Shield size={40} />
          <h3>Segurança total</h3>
          <p>Tecnologia protegida com sistemas de criptografia avançados.</p>
        </div>
        <div className="feature-card">
          <CheckCircle size={40} />
          <h3>Qualidade garantida</h3>
          <p>Produtos testados e aprovados para entregar excelência.</p>
        </div>
      </div>
    </section>
  );
}

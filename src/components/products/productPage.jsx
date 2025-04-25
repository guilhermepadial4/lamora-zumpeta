import './productPage.scss';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export function ProductPage() {
  return (
    <>
      <Header />
      <section className="product-list-page minimalist-product-page">
        <div className="container">
          <h1>Conheça a Linha Zunpeta</h1> {/* Título mais elegante */}
          <div className="products-grid">
            {products.map((product) => (
              <Link to={`/produto/${product.slug}`} key={product.id} className="product-card-link">
                {' '}
                {/* Link envolvendo o card */}
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  {product.price && <span className="product-price">R$ {product.price}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

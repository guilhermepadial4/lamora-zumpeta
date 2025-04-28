import { Link } from 'react-router-dom';

import { products } from '../../data/products';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

import './productPage.scss';

export function ProductPage() {
  return (
    <>
      <Header />
      <section className="product-list-page minimalist-vertical-page refined">
        <div className="container">
          <h1>Conheça a Linha Zunpeta</h1>
          <div className="products-list">
            {products.map((product) => (
              <Link to={`/produto/${product.slug}`} key={product.id} className="product-item">
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
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

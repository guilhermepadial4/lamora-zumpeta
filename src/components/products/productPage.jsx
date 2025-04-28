import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './productPage.scss';

export function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredProducts = selectedCategory === 'todos' ? products : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Header />
      <section className="product-list-page minimalist-vertical-page refined">
        <div className="container">
          <h1>Conheça a Linha Zunpeta</h1>

          <div className="filter-options">
            <label htmlFor="category-filter">Filtrar por:</label>
            <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="todos">Todos</option>
              <option value="celulares">Celulares</option>
              <option value="tablets">Tablets</option>
              <option value="notebooks">Notebooks</option>
              <option value="acessorios">Acessórios</option>
            </select>
          </div>

          <div className="products-list">
            {filteredProducts.map((product) => (
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

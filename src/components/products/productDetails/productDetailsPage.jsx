import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../data/products'; // Importe seus dados de produtos
import { Header } from '../../header/Header';
import { Footer } from '../../footer/Footer';
import './productDetailsPage.scss';

export function ProductDetailsPage() {
  const { slug } = useParams(); // Obtém o 'slug' da URL
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Estado inicial para a cor branca

  // Encontra o produto correspondente com base no slug
  const product = products.find((p) => p.slug === slug);

  // Lida com o caso em que o produto não é encontrado
  if (!product) {
    return (
      <>
        <Header />
        <div className="product-details-page container">
          <h1>Produto não encontrado</h1>
          <p>Desculpe, o produto que você procurava não existe.</p>
        </div>
        <Footer />
      </>
    );
  }

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    // Aqui você pode adicionar lógica para atualizar a imagem do produto com a cor selecionada, se tiver essa funcionalidade.
  };

  return (
    <>
      <Header />
      <div className="product-details-page container">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <span className="product-price">R$ {product.price}</span>

          <div className="product-options">
            <div className="color-selector">
              <label htmlFor="colorInput">Cor:</label>
              <input
                type="color"
                id="colorInput"
                value={selectedColor}
                onChange={handleColorChange}
              />
              <span className="selected-color-display" style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
            </div>
            {/* Outras opções de produto (tamanho, etc.) podem vir aqui */}
          </div>

          <div className="product-actions">
            <button className="add-to-cart-button">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
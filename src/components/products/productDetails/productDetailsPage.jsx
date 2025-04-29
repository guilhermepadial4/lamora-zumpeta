import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../data/products';
import { Header } from '../../header/Header';
import { Footer } from '../../footer/Footer';
import './productDetailsPage.scss';

export function ProductDetailsPage() {
  const { slug } = useParams();
  const [selectedColor, setSelectedColor] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.slug === slug);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.availableColors && foundProduct.availableColors.length > 0) {
      setSelectedColor(foundProduct.availableColors[0].value);
    }
  }, [slug]);

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
          <p className="product-description" dangerouslySetInnerHTML={{ __html: product.completeDescription }}></p>
          <span className="product-price">R$ {product.price}</span>

          <div className="product-options">
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="color-selector">
                <label>Cores Disponíveis:</label>
                <div className="color-inputs">
                  {product.availableColors.map((colorOption) => (
                    <div key={colorOption.value} className="color-option">
                      <input
                        type="radio"
                        name="color"
                        value={colorOption.value}
                        id={`color-${colorOption.name}`}
                        checked={selectedColor === colorOption.value}
                        onChange={handleColorChange}
                        className="color-input"
                        style={{ backgroundColor: colorOption.value }}
                      />
                      <label htmlFor={`color-${colorOption.name}`}>{colorOption.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

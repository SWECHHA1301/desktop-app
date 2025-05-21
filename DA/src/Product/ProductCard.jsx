import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
  const products = new Array(16).fill({
    name: 'Pizza',
    price: 240,
  });

  return (
   <div className="product-container">
  <div className="title-bar">
    <button className="filter-btn">BreakFast</button>
    <button className="filter-btn">Lunch</button>
    <button className="filter-btn">Dinner</button>
    <div className="indicator green"></div>
    <div className="indicator red"></div>
  </div>

  <div className="card-grid">
    {products.map((item, index) => (
      <div className="product-card" key={index}>
        <div className="product-image"></div>
        <div className="product-details">
          <div className="info">
            <p className="name">{item.name}</p>
            <p className="price">₹{item.price}</p>
          </div>
          <button className="add-button">+</button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ProductCard;

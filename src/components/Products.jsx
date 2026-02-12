import React from 'react';
import './Products.css';

const products = [
  {
    title: "Body Polishing Kits",
    desc: "Professional exfoliation for glowing skin",
    offset: 0
  },
  {
    title: "Skin Detoxifying Products",
    desc: "Deep cleanse and rejuvenate from within",
    offset: 40
  },
  {
    title: "Massage Creams",
    desc: "Therapeutic luxury for ultimate relaxation",
    offset: 80
  }
];

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container products-container">
        <div className="products-content">
          <h2 className="section-title text-left">Premium Beauty Products</h2>
          <p className="products-body">
            Take the salon experience home with our curated selection of professional-grade products. 
            From skin detoxifying treatments to luxury massage creams, we offer only the best.
          </p>
          <a href="#contact" className="btn-secondary">Shop Products</a>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ transform: `translateY(${product.offset}px)` }}
            >
              <div className="product-illustration">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 18H18V21H6V18Z" />
                  <path d="M8 18V7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V18" />
                  <path d="M10 5V3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5" />
                </svg>
              </div>
              <h3 className="product-name">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="products-bg-blob"></div>
    </section>
  );
};

export default Products;

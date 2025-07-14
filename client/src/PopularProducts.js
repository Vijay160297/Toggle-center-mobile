
import React, { useState } from 'react';
import './PopularProducts.css';
import { Modal, Button } from 'react-bootstrap';
// import axios from 'axios';
import { useCart } from './CartContext';

// // --buynow
import { useNavigate } from 'react-router-dom';

import phoneImg1 from './images/phoneimg-1.jpg';
import phoneImg2 from './images/phoneimg-2.jpg';
import phoneImg3 from './images/phoneimg-3.jpg';
import phoneImg4 from './images/phoneimg-4.jpg';
import phoneImg5 from './images/phoneimg-5.jpg';
import phoneImg6 from './images/phoneimg-6.jpg';
import phoneImg7 from './images/phoneimg-2.jpg';
import phoneImg8 from './images/phoneimg-3.jpg';
import phoneImg9 from './images/phoneimg-4.jpg';
import phoneImg10 from './images/phoneimg-5.jpg';
import phoneImg11 from './images/phoneimg-5.jpg';
import phoneImg12 from './images/phoneimg-5.jpg';
import phoneImg13 from './images/phoneimg-5.jpg';
import phoneImg14 from './images/phoneimg-5.jpg';
import phoneImg15 from './images/phoneimg-5.jpg';
import phoneImg16 from './images/phoneimg-5.jpg';
import phoneImg17 from './images/phoneimg-5.jpg';
import phoneImg18 from './images/phoneimg-5.jpg';
import phoneImg19 from './images/phoneimg-5.jpg';
import phoneImg20 from './images/phoneimg-5.jpg';

const phoneImages = [
  phoneImg1, phoneImg2, phoneImg3, phoneImg4, phoneImg5,
  phoneImg6, phoneImg7, phoneImg8, phoneImg9, phoneImg10,
  phoneImg11, phoneImg12, phoneImg13, phoneImg14, phoneImg15,
  phoneImg16, phoneImg17, phoneImg18, phoneImg19, phoneImg20
];

const phoneProducts = Array.from({ length: 20 }, (_, i) => {
  const id = 1 + i;
  const mainImg = phoneImages[i];
  const thumbnails = [
    phoneImages[i],
    phoneImages[(i + 1) % 20],
    phoneImages[(i + 2) % 20],
  ];

  return {
    id,
    name: `Phone Model ${id}`,
    img: mainImg,
    thumbnails: thumbnails,
    price: 12000 + i * 500,
    originalPrice: 15000 + i * 500,
    discount: 3000,
    description: `High-performance phone model ${id} with long battery life and smooth performance.`,
    ram: i % 2 === 0 ? "6 GB" : "8 GB",
    storage: i % 3 === 0 ? "128 GB" : "256 GB",
    rating: (4 + (i % 5) * 0.1).toFixed(1),
    offers: [
      "Flat ₹1000 off on ICICI cards",
      "No Cost EMI available",
      "Exchange offer up to ₹3000"
    ]
  };
});

const PopularProducts = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [showModal, setShowModal] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState('');
  const { addToCart } = useCart();

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setSelectedImg(product.img);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  const navigate = useNavigate();
  const handleBuyNow = (product) => {
  navigate('/payment', { state: { product } });
};

// --


  return (
    <div className="popular-products">
      <h2>Popular Phones</h2>
      <div className="product-list">
        {phoneProducts.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrapper">
              <img src={product.img} alt={product.name} />
              <div className="overlay">
                <button className="quick-view" onClick={() => handleQuickView(product)}>
                  Quick View
                </button>
              </div>
            </div>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <div className="product-buttons">
              <button
                className="add-to-cart-button"
                onClick={() => addToCart({
                  productId: product.id,
                  name: product.name,
                  price: product.price,
                  img: product.img,
                })}
              >
                 Add to Cart 
              </button>

              {/* <button
                className="buy-now-button"
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                  });
                  window.location.href = '/payment';
                }}
              >
                ⚡ Buy Now
              </button> */}
             <button
  className="buy-now-button"
  onClick={() => handleBuyNow(product)}
>
  ⚡ Buy Now
</button>


            </div>
          </div>
        ))}
      </div>

      {phoneProducts.length > 8 && (
        <div className="text-center my-3 d-flex justify-content-center gap-3">
          {visibleCount < phoneProducts.length && (
            <Button onClick={() => setVisibleCount(visibleCount + 5)}>
              Show More
            </Button>
          )}
          {visibleCount > 8 && (
            <Button variant="outline-secondary" onClick={() => setVisibleCount(8)}>
              Show Less
            </Button>
          )}
        </div>
      )}

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Phone Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="d-flex flex-column flex-md-row gap-4">
              <div className="text-center" style={{ flex: 1 }}>
                <div className="d-flex flex-md-column gap-2 justify-content-center align-items-center mb-3">
                  {selectedProduct.thumbnails.map((thumb, idx) => (
                    <img
                      key={idx}
                      src={thumb}
                      alt="Thumb"
                      onClick={() => setSelectedImg(thumb)}
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        cursor: 'pointer',
                        border: thumb === selectedImg ? '2px solid #2874f0' : '1px solid #ccc',
                        borderRadius: 4
                      }}
                    />
                  ))}
                </div>
                <img
                  src={selectedImg}
                  alt="Preview"
                  className="img-fluid"
                  style={{ maxHeight: 250 }}
                />
              </div>

              <div style={{ flex: 2 }}>
                <h5>{selectedProduct.name}</h5>
                <span className="badge bg-success">⭐ {selectedProduct.rating}</span>
                <span className="ms-3">{selectedProduct.ram} | {selectedProduct.storage}</span>
                <h4 className="text-danger">₹{selectedProduct.price}</h4>
                <p className="text-muted text-decoration-line-through">₹{selectedProduct.originalPrice}</p>
                <p className="text-success fw-bold">Extra ₹{selectedProduct.discount} off</p>
                <p><strong>Description:</strong> {selectedProduct.description}</p>
                <h6>Offers</h6>
                <ul className="list-unstyled">
                  {selectedProduct.offers.map((offer, idx) => (
                    <li key={idx} className="text-success">✔ {offer}</li>
                  ))}
                </ul>

                <div className="d-flex gap-2 mt-3">
                  <Button
                    // style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
                       variant="warning"

                    onClick={() => {
                      addToCart({
                        productId: selectedProduct.id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        img: selectedProduct.img,
                      });
                      alert("Phone added to cart");
                    }}
                  >
                    🛒 Add to Cart
                  </Button>

                  {/* <Button
                    style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                    onClick={() => {
                      axios.post('http://localhost:5000/api/cart', {
                        productId: selectedProduct.id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        quantity: 1
                      })
                        .then(() => window.location.href = '/cart')
                        .catch(err => {
                          alert("Checkout error");
                          console.error(err);
                        });
                    }}
                  >
                    ⚡ Buy Now
                  </Button> */}
                  <Button
  style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
  onClick={() => handleBuyNow(selectedProduct)}
>
  ⚡ Buy Now
</Button>

                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PopularProducts;


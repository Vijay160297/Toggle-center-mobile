
import React, { useState } from 'react';
// import './PopularProducts.css';
import './Tablets.css';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Import 20 tablet images
import tabletImg1 from './images/tablet1.jpg';
import tabletImg2 from './images/tablet2.jpg';
import tabletImg3 from './images/tablet3.jpg';
import tabletImg4 from './images/tablet4.jpg';
import tabletImg5 from './images/tablet5.jpg';
import tabletImg6 from './images/tablet6.jpg';
import tabletImg7 from './images/tablet7.jpg';
import tabletImg8 from './images/tablet8.jpg';
import tabletImg9 from './images/tablet9.jpg';
import tabletImg10 from './images/tablet10.jpg';
import tabletImg11 from './images/tablet11.jpg';
import tabletImg12 from './images/tablet12.jpg';
import tabletImg13 from './images/tablet13.jpg';
import tabletImg14 from './images/tablet14.jpg';
import tabletImg15 from './images/tablet15.jpg';
import tabletImg16 from './images/tablet16.jpg';
import tabletImg17 from './images/tablet17.jpg';
import tabletImg18 from './images/tablet18.jpg';
import tabletImg19 from './images/tablet19.jpg';
import tabletImg20 from './images/tablet20.jpg';

// Array of all 20 images
const tabletImages = [
  tabletImg1, tabletImg2, tabletImg3, tabletImg4, tabletImg5,
  tabletImg6, tabletImg7, tabletImg8, tabletImg9, tabletImg10,
  tabletImg11, tabletImg12, tabletImg13, tabletImg14, tabletImg15,
  tabletImg16, tabletImg17, tabletImg18, tabletImg19, tabletImg20
];

// Generate 20 tablet products
const tabletProducts = Array.from({ length: 20 }, (_, i) => {
  const id = 101 + i;
  const mainImg = tabletImages[i];
  const thumbnails = [
    tabletImages[i],
    tabletImages[(i + 1) % 20],
    tabletImages[(i + 2) % 20],
  ];

  return {
    id,
    name: `Tablet Model ${id}`,
    img: mainImg,
    thumbnails: thumbnails,
    price: 10000 + i * 500,
    originalPrice: 12000 + i * 500,
    discount: 2000,
    description: `High-performance tablet model ${id} with extended features and rich display.`,
    ram: i % 2 === 0 ? "4 GB" : "6 GB",
    storage: i % 3 === 0 ? "64 GB" : "128 GB",
    rating: (4 + (i % 5) * 0.1).toFixed(1),
    offers: [
      "10% off on all bank cards",
      "No Cost EMI available",
      "Extra exchange bonus up to ₹2000"
    ]
  };
});

const Tablets = () => {
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

  return (
    <div className="popular-products">
      <h2>Top Tablets</h2>
      <div className="product-list">
        {tabletProducts.slice(0, visibleCount).map((product) => (
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
{/* 
              <button
                className="buy-now-button"
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                  });
                  window.location.href = '/cart';
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

      {tabletProducts.length > 8 && (
        <div className="text-center my-3 d-flex justify-content-center gap-3">
          {visibleCount < tabletProducts.length && (
            <Button onClick={() => setVisibleCount(visibleCount + 5)}>
              Show More
            </Button>
          )}
          {visibleCount > 8 && (
            <Button variant="outline-secondary" onClick={() => setVisibleCount(5)}>
              Show Less
            </Button>
          )}
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tablet Preview</Modal.Title>
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

                <Button
                  variant="warning"
                  onClick={() => {
                    addToCart({
                      productId: selectedProduct.id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      img: selectedProduct.img,
                    });
                    alert("Tablet added to cart");
                  }}
                >
                  🛒 Add to Cart
                </Button>

                {/* <Button
                  variant="danger"
                  className="ms-2"
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
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Tablets;


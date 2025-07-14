import React, { useState } from 'react';
import './Tablets.css'; // Reusing same styling
import { Modal, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Import 20 accessory images
import accImg1 from './images/acc1.jpg';
import accImg2 from './images/acc2.jpg';
import accImg3 from './images/acc3.jpg';
import accImg4 from './images/acc4.jpg';
import accImg5 from './images/acc5.jpg';
import accImg6 from './images/acc6.jpg';
import accImg7 from './images/acc7.jpg';
import accImg8 from './images/acc8.jpg';
import accImg9 from './images/acc9.jpg';
import accImg10 from './images/acc10.jpg';
import accImg11 from './images/acc11.jpg';
import accImg12 from './images/acc12.jpg';
import accImg13 from './images/acc13.jpg';
import accImg14 from './images/acc14.jpg';
import accImg15 from './images/acc15.jpg';
import accImg16 from './images/acc16.jpg';
import accImg17 from './images/acc17.jpg';
import accImg18 from './images/acc18.jpg';
import accImg19 from './images/acc19.jpg';
import accImg20 from './images/acc20.jpg';

const accImages = [
  accImg1, accImg2, accImg3, accImg4, accImg5,
  accImg6, accImg7, accImg8, accImg9, accImg10,
  accImg11, accImg12, accImg13, accImg14, accImg15,
  accImg16, accImg17, accImg18, accImg19, accImg20
];

// Generate accessories data
const accessories = Array.from({ length: 20 }, (_, i) => {
  const id = 201 + i;
  const mainImg = accImages[i];
  const thumbnails = [
    accImages[i],
    accImages[(i + 1) % 20],
    accImages[(i + 2) % 20],
  ];

  return {
    id,
    name: `Accessory ${id}`,
    img: mainImg,
    thumbnails: thumbnails,
    price: 499 + i * 50,
    originalPrice: 699 + i * 50,
    discount: 200,
    description: `Premium quality mobile accessory ${id}, crafted for durability and style.`,
    rating: (4 + (i % 5) * 0.2).toFixed(1),
    offers: [
      "5% off with UPI payment",
      "Buy 2 get 5% off",
      "Free shipping on orders above ₹999"
    ]
  };
});

const Accessories = () => {
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
      <h2>Mobile Accessories</h2>
      <div className="product-list">
        {accessories.slice(0, visibleCount).map((product) => (
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
                onClick={() =>
                  addToCart({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                  })
                }
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

      {/* Show More / Show Less */}
      {accessories.length > 8 && (
        <div className="text-center my-3 d-flex justify-content-center gap-3">
          {visibleCount < accessories.length && (
            <Button onClick={() => setVisibleCount(visibleCount + 5)}>Show More</Button>
          )}
          {visibleCount > 8 && (
            <Button variant="outline-secondary" onClick={() => setVisibleCount(5)}>Show Less</Button>
          )}
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Accessory Preview</Modal.Title>
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
                        borderRadius: 4,
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
                <h4 className="text-danger mt-2">₹{selectedProduct.price}</h4>
                <p className="text-muted text-decoration-line-through">₹{selectedProduct.originalPrice}</p>
                <p className="text-success fw-bold">Save ₹{selectedProduct.discount}</p>
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
                    alert("Accessory added to cart");
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

export default Accessories;

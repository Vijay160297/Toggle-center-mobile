
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ShopAll.css';
import { useCart } from './CartContext';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// === PHONE IMAGES ===

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



// === TABLET IMAGES ===
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




// === ACCESSORY IMAGES ===
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



const phoneImages = [
  phoneImg1, phoneImg2, phoneImg3, phoneImg4, phoneImg5,
  phoneImg6, phoneImg7, phoneImg8, phoneImg9, phoneImg10,
  phoneImg11, phoneImg12, phoneImg13, phoneImg14, phoneImg15,
  phoneImg16, phoneImg17, phoneImg18, phoneImg19, phoneImg20
];

const tabletImages = [
  tabletImg1, tabletImg2, tabletImg3, tabletImg4, tabletImg5,
  tabletImg6, tabletImg7, tabletImg8, tabletImg9, tabletImg10,
  tabletImg11, tabletImg12, tabletImg13, tabletImg14, tabletImg15,
  tabletImg16, tabletImg17, tabletImg18, tabletImg19, tabletImg20
];
const accImages = [
  accImg1, accImg2, accImg3, accImg4, accImg5,
  accImg6, accImg7, accImg8, accImg9, accImg10,
  accImg11, accImg12, accImg13, accImg14, accImg15,
  accImg16, accImg17, accImg18, accImg19, accImg20
];

// ✅ Helper function to generate product objects
const generateProducts = (images, type, startId) => {
  return images.map((img, i) => ({
    id: startId + i,
    name: `${type} ${i + 1}`,
    type,
    img,
    thumbnails: [img, images[(i + 1) % images.length], images[(i + 2) % images.length]],
    ram: '6GB',
    storage: '128GB',
    price: 9999 + i * 500,
    rating: (4 + (i % 2)).toFixed(1),
    description: `This is ${type.toLowerCase()} number ${i + 1}.`,
    offers: [`Offer ${i + 1}`, `Discount ${i + 1}`]
  }));
};

// ✅ Main Component
const ShopAll = () => {
  const [selectedImg, setSelectedImg] = useState('');

  const phoneProducts = generateProducts(phoneImages, 'Phone', 1);
  const tabletProducts = generateProducts(tabletImages, 'Tablet', 101);
  const accessories = generateProducts(accImages, 'Accessory', 201);

  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };
   const navigate = useNavigate();
      const handleBuyNow = (product) => {
      navigate('/payment', { state: { product } });
    };

        const renderProducts = (products, title) => (
        <div className="mb-5">
          <h2 className="mb-3">{title}</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-image"
                  onClick={() => handleShowModal(product)}
                />
                <h5 className="mt-2">{product.name}</h5>
                <p className="price">₹{product.price}</p>
                <div className="d-flex justify-content-between gap-2">
                  {/* <Button
                    // variant="primary"
                    
                    size="sm"
                    className="w-80"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    // variant="warning"
                    size="sm"
                    className="w-95"
                  >
                   ⚡ Buy Now
                  </Button> */}
                  <Button
                  size="sm"
                  className="w-95 text-white"
                  style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>

                {/* <Button
                  size="sm"
                  className="w-95 text-white"
                  style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}
                >
                  ⚡ Buy Now
                </Button> */}

                </div>
              </div>
            ))}
          </div>
        </div>
      );


  return (
    <div className="container mt-4">
      {renderProducts(phoneProducts, 'Popular Phones')}
      {renderProducts(tabletProducts, 'Tablets')}
      {renderProducts(accessories, 'Accessories')}

     
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">

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

export default ShopAll;

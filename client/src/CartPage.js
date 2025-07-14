
// src/CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
// import phoneImg1 from './images/phoneimg-1.jpg';

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-4">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cartItems.length === 0 ? (
        <h5>Your cart is empty</h5>
      ) : (
        <>
          <Row>
            <Col md={12}>
              {cartItems.map((item, index) => (
                <Card className="mb-3 shadow-sm" key={index}>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                      />
                      <div className="ms-3">
                        <h5>{item.name}</h5>
                        <p className="mb-1 fw-bold text-success">₹{item.price}</p>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => decreaseQuantity(item.productId)}
                          >
                            −
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => increaseQuantity(item.productId)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      ❌ Remove
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>

          {/* Buy Now Footer */}
          <div className="d-flex justify-content-between align-items-center mt-4 p-3 shadow-sm bg-light rounded">
            <h5 className="mb-0">Total Amount: <span className="text-success">₹{totalAmount}</span></h5>
            <Button variant="success" size="lg">
              🛍 Buy Now
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;

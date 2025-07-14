 import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const getImageUrl = (filename) => {
    try {
      return require(`./images/${filename}`);
    } catch {
      return ''; // fallback
    }
  };

  return (
    <Container className="py-4">
      <h3 className="mb-4 text-center fw-bold text-primary">📦 My Orders</h3>
      <Row xs={1} md={2} lg={3} className="g-4">
        {orders.length === 0 ? (
          <p className="text-center text-muted">You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <Col key={index}>
              <Card className="shadow-sm h-100">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={getImageUrl(order.img)}
                    alt={order.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{order.name}</Card.Title>
                  <Card.Text className="text-danger fw-bold">₹{order.price}</Card.Text>
                  <Card.Text className="text-muted">
                    <strong>Place:</strong> {order.place}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    <strong>Placed:</strong>{' '}
                    {order.dateTime ? new Date(order.dateTime).toLocaleString() : 'N/A'}
                  </Card.Text>
                  <p className="text-success mb-0">✔️ Order Confirmed</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MyOrders;

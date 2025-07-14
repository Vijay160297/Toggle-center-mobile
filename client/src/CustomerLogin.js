

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const CustomerLogin = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Generate 4-digit OTP
  const sendOtp = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    setError('');
    alert(`🔐 Your OTP is: ${otp}`); // Simulate SMS
  };

  const verifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setOtpVerified(true);
      setError('');
      alert('✅ OTP Verified Successfully');
    } else {
      setError('❌ Incorrect OTP. Try again.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!otpVerified) {
      setError('Please verify the OTP before login.');
      return;
    }

    localStorage.setItem('user', JSON.stringify({
      name,
      place,
      email,
      phone,
      role: 'customer'
    }));

    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center mb-4">Customer Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="d-grid mt-2">
              <Button variant="secondary" onClick={sendOtp} disabled={otpSent}>
                {otpSent ? 'OTP Sent' : 'Send OTP'}
              </Button>
            </div>
          </Form.Group>

          {otpSent && !otpVerified && (
            <Form.Group className="mb-3">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
              />
              <div className="d-grid mt-2">
                <Button variant="success" onClick={verifyOtp}>Verify OTP</Button>
              </div>
            </Form.Group>
          )}

          <div className="d-grid mt-4">
            <Button variant="primary" type="submit" size="lg" disabled={!otpVerified}>
              Login as Customer
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default CustomerLogin;


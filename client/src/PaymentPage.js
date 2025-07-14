
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Button, Container, Card, Image } from 'react-bootstrap';
// import { FaCheckCircle } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import qrImage from './images/qrcode.png'; // 🟡 Add a placeholder QR image in your /images folder

// const PaymentPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   const [selectedMethod, setSelectedMethod] = useState(null);
//   const newOrder = {
//   title: selectedProduct.title,
//   price: selectedProduct.price,
//   image: selectedProduct.image, // just the filename like "phoneimg-1.jpg"
// };

// const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
// localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));


//   const handleConfirm = () => {
//     alert(
//       selectedMethod === 'qr'
//         ? '✅ QR Payment received!'
//         : selectedMethod === 'upi'
//         ? '✅ UPI Payment successful!'
//         : '✅ Cash on Delivery selected!'
//     );

//     setTimeout(() => {
//       navigate('/order-success');
//     }, 1000);
//   };

//   if (!product) {
//     return (
//       <Container className="text-center mt-5">
//         <h5>No product selected for payment.</h5>
//       </Container>
//     );
//   }
  

//   return (
//     <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '90vh' }}>
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         style={{ width: '100%', maxWidth: '600px' }}
//       >
//         <Card className="shadow-lg p-4">
//           <h4 className="text-center mb-4">Confirm & Pay</h4>

//           <Card className="mb-4 border-0 shadow-sm">
//             <div className="d-flex align-items-center p-3">
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 rounded
//                 style={{
//                   width: '100px',
//                   height: '100px',
//                   objectFit: 'cover',
//                   marginRight: '20px',
//                 }}
//               />
//               <div>
//                 <h6 className="mb-1">{product.name}</h6>
//                 <p className="text-danger fw-bold mb-0">₹{product.price}</p>
//               </div>
//             </div>
//           </Card>

//           <h5 className="mb-3">Choose Payment Method</h5>

//           <div className="d-grid gap-3 mb-4">
//             <Button
//               variant={selectedMethod === 'cod' ? 'success' : 'outline-success'}
//               onClick={() => setSelectedMethod('cod')}
//             >
//               <FaCheckCircle className="me-2" />
//               Cash on Delivery
//             </Button>

//             <Button
//               variant={selectedMethod === 'qr' ? 'primary' : 'outline-primary'}
//               onClick={() => setSelectedMethod('qr')}
//             >
//               <FaCheckCircle className="me-2" />
//               Mark as Paid (QR)
//             </Button>

//             <Button
//               variant={selectedMethod === 'upi' ? 'dark' : 'outline-dark'}
//               onClick={() => setSelectedMethod('upi')}
//             >
//               <FaCheckCircle className="me-2" />
//               Pay with UPI
//             </Button>
//           </div>

//           {selectedMethod === 'qr' && (
//             <div className="text-center mb-3">
//               <h6>Scan to Pay</h6>
//               <Image src={qrImage} alt="QR Code" style={{ width: 200 }} />
//               <p className="text-muted mt-2">Scan this QR with any UPI app to complete payment.</p>
//             </div>
//           )}

//           {selectedMethod === 'upi' && (
//             <div className="text-center mb-3">
//               <h6>Pay via UPI ID</h6>
//               <p className="fw-bold mb-1">store@upi</p>
//               <p className="text-muted">Use your UPI app to send the exact amount.</p>
//               <p className="text-muted">Reference: Order#{product.id}</p>
//             </div>
//           )}

//           {selectedMethod && (
//             <div className="d-grid mt-4">
//               <Button variant="danger" size="lg" onClick={handleConfirm}>
//                 ✅ Confirm Payment
//               </Button>
//             </div>
//           )}
//         </Card>
//       </motion.div>
//     </Container>
//   );
// };

// export default PaymentPage;



//----
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Card, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import qrImage from './images/qrcode.png'; // ✅ Make sure this image exists in your /images folder

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleConfirm = () => {
    // ✅ Save to localStorage
    // const newOrder = {
    //   title: product.name,
    //   price: product.price,
    //   image: product.img,
    // };
  
// const newOrder = {
//   title: product.name,
//   price: product.price,
//   img: product.img,
//   dateTime: new Date().toISOString(), // ⏰ Save time of order
// };



    // const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    // localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));
//     const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
// localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));
const customerData = JSON.parse(localStorage.getItem('customer')) || {};

const newOrder = {
  name: product.name,
  price: product.price,
  img: product.img, // this should be just the filename like "phoneimg-1.jpg"
  place: customerData.place || 'Unknown',
  dateTime: new Date().toISOString(),
};

const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));



    // ✅ Show alert based on payment method
    alert(
      selectedMethod === 'qr'
        ? '✅ QR Payment received!'
        : selectedMethod === 'upi'
        ? '✅ UPI Payment successful!'
        : '✅ Cash on Delivery selected!'
    );

    setTimeout(() => {
      navigate('/order-success');
    }, 1000);
  };

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <h5>No product selected for payment.</h5>
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '90vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '600px' }}
      >
        <Card className="shadow-lg p-4">
          <h4 className="text-center mb-4">Confirm & Pay</h4>

          {/* Product Preview */}
          <Card className="mb-4 border-0 shadow-sm">
            <div className="d-flex align-items-center p-3">
              <Image
                src={product.img}
                alt={product.name}
                rounded
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  marginRight: '20px',
                }}
              />
              <div>
                <h6 className="mb-1">{product.name}</h6>
                <p className="text-danger fw-bold mb-0">₹{product.price}</p>
              </div>
            </div>
          </Card>

          {/* Payment Options */}
          <h5 className="mb-3">Choose Payment Method</h5>
          <div className="d-grid gap-3 mb-4">
            <Button
              variant={selectedMethod === 'cod' ? 'success' : 'outline-success'}
              onClick={() => setSelectedMethod('cod')}
            >
              <FaCheckCircle className="me-2" />
              Cash on Delivery
            </Button>

            <Button
              variant={selectedMethod === 'qr' ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedMethod('qr')}
            >
              <FaCheckCircle className="me-2" />
              Mark as Paid (QR)
            </Button>

            <Button
              variant={selectedMethod === 'upi' ? 'dark' : 'outline-dark'}
              onClick={() => setSelectedMethod('upi')}
            >
              <FaCheckCircle className="me-2" />
              Pay with UPI
            </Button>
          </div>

          {/* QR Code */}
          {selectedMethod === 'qr' && (
            <div className="text-center mb-3">
              <h6>Scan to Pay</h6>
              <Image src={qrImage} alt="QR Code" style={{ width: 200 }} />
              <p className="text-muted mt-2">Scan this QR with any UPI app to complete payment.</p>
            </div>
          )}

          {/* UPI Info */}
          {selectedMethod === 'upi' && (
            <div className="text-center mb-3">
              <h6>Pay via UPI ID</h6>
              <p className="fw-bold mb-1">store@upi</p>
              <p className="text-muted">Use your UPI app to send the exact amount.</p>
              <p className="text-muted">Reference: Order#{product.id}</p>
            </div>
          )}

          {/* Confirm Button */}
          {selectedMethod && (
            <div className="d-grid mt-4">
              <Button variant="danger" size="lg" onClick={handleConfirm}>
                ✅ Confirm Payment
              </Button>
            </div>
          )}
        </Card>
      </motion.div>
    </Container>
  );
};

export default PaymentPage;

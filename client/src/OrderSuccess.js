// OrderSuccess.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaCheckCircle } from 'react-icons/fa';
// import { Button, Container, Card } from 'react-bootstrap';

// const OrderSuccess = () => {
//   const navigate = useNavigate();

//   const handleOkClick = () => {
//     navigate('/');
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//       <Card className="p-5 text-center shadow">
//         <FaCheckCircle size={80} color="green" className="mb-4" />
//         <h2 className="text-success">Order Placed Successfully!</h2>
//         <p className="text-muted">Thank you for shopping with us.</p>
//         <Button variant="success" className="mt-3 px-4" onClick={handleOkClick}>
//           OK
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default OrderSuccess;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { Button, Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        // style={{ width: '100%', maxWidth: '500px' }}
      >
        <Card className="p-5 text-center shadow-lg">
          <FaCheckCircle size={80} color="green" className="mb-4" />
          <h2 className="text-success mb-3">Order Placed Successfully!</h2>
          <p className="text-muted">Thank you for shopping with us.</p>
          <Button variant="success" className="mt-4 px-5" onClick={handleOkClick}>
            OK
          </Button>
        </Card>
      </motion.div>
    </Container>
  );
};

export default OrderSuccess;


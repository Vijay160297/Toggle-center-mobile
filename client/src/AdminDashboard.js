// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [purchases, setPurchases] = useState([]);

//   useEffect(() => {
//     // Fetch all purchases
//     axios.get('http://localhost:5000/api/purchases')
//       .then(res => {
//         setPurchases(res.data);
//       })
//       .catch(err => {
//         console.error('Failed to fetch purchases:', err);
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3 text-danger">Admin Dashboard - Purchase History</h2>
//       {purchases.length === 0 ? (
//         <p>No purchases yet.</p>
//       ) : (
//         <table className="table table-bordered table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Product ID</th>
//               <th>Name</th>
//               <th>Price (₹)</th>
//               <th>Quantity</th>
//               <th>User Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {purchases.map((item, index) => (
//               <tr key={item.id}>
//                 <td>{index + 1}</td>
//                 <td>{item.product_id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.user_email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


// import React from 'react';

// const AdminDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3">Welcome Admin</h2>
//       <p>Email: {user?.email}</p>
//       <p>Manage your inventory, orders, and users here.</p>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import { Table, Container, Card } from 'react-bootstrap';

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem('buyNowOrders')) || [];
//     setOrders(storedOrders);
//   }, []);

//   return (
//     <Container className="mt-5">
//       <Card className="shadow p-4">
//         <h3 className="mb-4 text-center">📦 Buy Now Orders</h3>

//         {orders.length === 0 ? (
//           <p>No Buy Now purchases found.</p>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>RAM</th>
//                 <th>Storage</th>
//                 <th>Customer Name</th>
//                 <th>Place</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Payment Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, idx) => (
//                 <tr key={idx}>
//                   <td>{idx + 1}</td>
//                   <td>{order.title}</td>
//                   <td>{order.price}</td>
//                   <td>{order.ram}</td>
//                   <td>{order.storage}</td>
//                   <td>{order.customer?.name || '-'}</td>
//                   <td>{order.customer?.place || '-'}</td>
//                   <td>{order.customer?.email || '-'}</td>
//                   <td>{order.customer?.phone || '-'}</td>
//                   <td>{order.payment || '-'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from 'react';
import { Table, Container, Card, Form, Toast } from 'react-bootstrap';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('buyNowOrders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;

    // Save back to localStorage
    localStorage.setItem('buyNowOrders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);

    // Show Toast
    setShowToast(true);

    // Simulate sending message to customer (console or alert for now)
    const customer = updatedOrders[index].customer;
    alert(`Order for ${customer.name} (${customer.email}) is now "${newStatus}"`);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h3 className="mb-4 text-center">📦 Buy Now Orders</h3>

        {orders.length === 0 ? (
          <p>No Buy Now purchases found.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Customer Name</th>
                <th>Place</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>{order.ram}</td>
                  <td>{order.storage}</td>
                  <td>{order.customer?.name || '-'}</td>
                  <td>{order.customer?.place || '-'}</td>
                  <td>{order.customer?.email || '-'}</td>
                  <td>{order.customer?.phone || '-'}</td>
                  <td>{order.payment || '-'}</td>
                  <td>
                    <Form.Select
                      value={order.status || 'Pending'}
                      onChange={(e) => handleStatusChange(idx, e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Ready to Ship</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </Form.Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>

      {/* Toast for status update */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto">Status Updated</strong>
          </Toast.Header>
          <Toast.Body>Order status updated and customer notified.</Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default AdminDashboard;


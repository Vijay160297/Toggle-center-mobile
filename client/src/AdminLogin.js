// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // 🔐 Change these if you want different admin credentials
//     if (email === 'admin@example.com' && password === 'admin123') {
//       localStorage.setItem('user', JSON.stringify({
//         name: 'Admin',
//         role: 'admin'
//       }));
//       navigate('/');
//     } else {
//       alert('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label>Email:</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-danger">Login as Admin</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Hardcoded admin login
//     if (email === 'admin@example.com' && password === 'admin123') {
//       localStorage.setItem('user', JSON.stringify({
//         name: 'Admin',
//         role: 'admin'
//       }));
//       navigate('/');
//     } else {
//       alert('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label>Email:</label>
//           <input type="email" className="form-control"
//             value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label>Password:</label>
//           <input type="password" className="form-control"
//             value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button className="btn btn-danger" type="submit">Login as Admin</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({
        name: 'Admin',
        role: 'admin'
      }));
      navigate('/admin-dashboard');
    } else {
      setError('❌ Invalid admin credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-danger">Admin Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter admin email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" variant="danger">Login as Admin</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminLogin;




// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import { Navbar, Nav, Container } from 'react-bootstrap';
// // // // // // import { Link, useNavigate } from 'react-router-dom';
// // // // // // import { FaUserCircle, FaUserShield } from 'react-icons/fa';
// // // // // // import { useCart } from './CartContext';

// // // // // // const NavigationBar = () => {
// // // // // //   const { cartItems } = useCart();
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const storedUser = JSON.parse(localStorage.getItem('user'));
// // // // // //     if (storedUser) {
// // // // // //       setUser(storedUser);
// // // // // //     }
// // // // // //   }, []);
// // // // // //   localStorage.setItem('user', JSON.stringify({
// // // // // //   name: 'Admin',
// // // // // //   role: 'admin'
// // // // // // }));


// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem('user');
// // // // // //     setUser(null);
// // // // // //     navigate('/');
// // // // // //   };

// // // // // //   const isAdmin = user?.role === 'admin';
// // // // // //   const isCustomer = user?.role === 'customer';

// // // // // //   return (
// // // // // //     <Navbar bg="light" expand="lg" className="shadow-sm">
// // // // // //       <Container>
// // // // // //         <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
// // // // // //         <Navbar.Toggle aria-controls="navbar-nav" />
// // // // // //         <Navbar.Collapse id="navbar-nav">
// // // // // //           <Nav className="mx-auto nav-links">
// // // // // //             <Link to="/" className="nav-link">Home</Link>
// // // // // //             <Link to="/shop" className="nav-link">Shop All</Link>
// // // // // //             <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
// // // // // //             <Link to="/tablets" className="nav-link">Tablets</Link>
// // // // // //             <Link to="/accessories" className="nav-link">Accessories</Link>
// // // // // //             <Link to="/about" className="nav-link">About</Link>
// // // // // //             <Link to="/contact" className="nav-link">Contact Us</Link>
// // // // // //           </Nav>

// // // // // //           <Nav className="ms-auto align-items-center">

// // // // // //             {/* Admin Logged In */}
// // // // // //             {isAdmin && (
// // // // // //               <div className="d-flex align-items-center me-3">
// // // // // //                 <FaUserShield size={22} className="me-1 text-danger" />
// // // // // //                 <span className="text-danger fw-semibold">Admin</span>
// // // // // //                 <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>
// // // // // //                   Admin Logout
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Customer Logged In */}
// // // // // //             {isCustomer && (
// // // // // //               <div className="d-flex align-items-center me-3">
// // // // // //                 <FaUserCircle size={22} className="me-1 text-primary" />
// // // // // //                 <span className="text-dark fw-semibold">{user.name}</span>
// // // // // //                 <button className="btn btn-sm btn-outline-secondary ms-2" onClick={handleLogout}>
// // // // // //                   Customer Logout
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Not Logged In */}
// // // // // //             {!user && (
// // // // // //               <>
// // // // // //                 <Link to="/login" className="nav-link d-flex align-items-center me-3">
// // // // // //                   <FaUserCircle className="me-1 text-primary" />
// // // // // //                   Customer Login
// // // // // //                 </Link>
// // // // // //                 <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold">
// // // // // //                   <FaUserShield className="me-1" />
// // // // // //                   Admin Login
// // // // // //                 </Link>
// // // // // //               </>
// // // // // //             )}

// // // // // //             {/* Cart Icon */}
// // // // // //             <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
// // // // // //               <span role="img" aria-label="cart">🛒</span>
// // // // // //               <span className="ms-1 badge bg-danger text-white rounded-pill">
// // // // // //                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
// // // // // //               </span>
// // // // // //             </Link>

// // // // // //           </Nav>
// // // // // //         </Navbar.Collapse>
// // // // // //       </Container>
// // // // // //     </Navbar>
// // // // // //   );
// // // // // // };

// // // // // // export default NavigationBar;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { Navbar, Nav, Container } from 'react-bootstrap';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // import { FaUserCircle, FaUserShield } from 'react-icons/fa';
// // // // import { useCart } from './CartContext';

// // // // const NavigationBar = () => {
// // // //   const { cartItems } = useCart();
// // // //   const [user, setUser] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const storedUser = JSON.parse(localStorage.getItem('user'));
// // // //     if (storedUser) {
// // // //       setUser(storedUser);
// // // //     }
// // // //   }, []);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem('user');
// // // //     setUser(null);
// // // //     navigate('/');
// // // //   };

// // // //   const isAdmin = user?.role === 'admin';
// // // //   const isCustomer = user?.role === 'customer';
  

// // // //   return (
// // // //     <Navbar bg="light" expand="lg" className="shadow-sm">
// // // //       <Container>
// // // //         <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
// // // //         <Navbar.Toggle aria-controls="navbar-nav" />
// // // //         <Navbar.Collapse id="navbar-nav">
// // // //           <Nav className="mx-auto">
// // // //             <Link to="/" className="nav-link">Home</Link>
// // // //             <Link to="/shopall" className="nav-link">Shop All</Link>
// // // //             <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
// // // //             <Link to="/tablets" className="nav-link">Tablets</Link>
// // // //             <Link to="/accessories" className="nav-link">Accessories</Link>
// // // //             <Link to="/about" className="nav-link">About</Link>
// // // //             <Link to="/contact" className="nav-link">Contact Us</Link>
// // // //           </Nav>

// // // //           <Nav className="ms-auto align-items-center">

// // // //             {/* Admin Logged In */}
// // // //             {isAdmin && (
// // // //               <div className="d-flex align-items-center me-3">
// // // //                 <FaUserShield size={22} className="me-1 text-danger" />
// // // //                 <span className="text-danger fw-semibold">Admin</span>
// // // //                 <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
// // // //               </div>
// // // //             )}

// // // //             {/* Customer Logged In */}
// // // //             {isCustomer && (
// // // //               <div className="d-flex align-items-center me-3">
// // // //                 <FaUserCircle size={22} className="me-1 text-primary" />
// // // //                 <span className="text-dark fw-semibold">{user.name}</span>
// // // //                 <button className="btn btn-sm btn-outline-secondary ms-2" onClick={handleLogout}>Logout</button>
// // // //               </div>
// // // //             )}

// // // //             {/* If Not Logged In */}
// // // //             {!user && (
// // // //               <>
// // // //                 <Link to="/login" className="nav-link d-flex align-items-center me-3">
// // // //                   <FaUserCircle className="me-1 text-primary" />
// // // //                   Customer Login
// // // //                 </Link>
// // // //                 <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold me-3">
// // // //                   <FaUserShield className="me-1" />
// // // //                   Admin Login
// // // //                 </Link>
// // // //               </>
// // // //             )}

// // // //             {/* Cart Icon */}
// // // //             <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
// // // //               <span role="img" aria-label="cart">🛒</span>
// // // //               <span className="ms-1 badge bg-danger text-white rounded-pill">
// // // //                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
// // // //               </span>
// // // //             </Link>
// // // //           </Nav>
// // // //         </Navbar.Collapse>
// // // //       </Container>
// // // //     </Navbar>
// // // //   );
// // // // };

// // // // export default NavigationBar;


// // // import React, { useEffect, useState } from 'react';
// // // import { Navbar, Nav, Container } from 'react-bootstrap';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { FaUserCircle, FaUserShield } from 'react-icons/fa';
// // // import { useCart } from './CartContext';

// // // const NavigationBar = () => {
// // //   const { cartItems } = useCart();
// // //   const [user, setUser] = useState(null);
// // //   const [orders, setOrders] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const storedUser = JSON.parse(localStorage.getItem('user'));
// // //     if (storedUser) {
// // //       setUser(storedUser);
// // //       // Load customer orders
// // //       const allUsersData = JSON.parse(localStorage.getItem('usersData')) || {};
// // //       const userOrders = allUsersData[storedUser.email]?.purchases || [];
// // //       setOrders(userOrders);
// // //     }
// // //   }, []);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('user');
// // //     setUser(null);
// // //     navigate('/');
// // //   };

// // //   const isAdmin = user?.role === 'admin';
// // //   const isCustomer = user?.role === 'customer';

// // //   return (
// // //     <Navbar bg="light" expand="lg" className="shadow-sm">
// // //       <Container>
// // //         <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
// // //         <Navbar.Toggle aria-controls="navbar-nav" />
// // //         <Navbar.Collapse id="navbar-nav">
// // //           <Nav className="mx-auto">
// // //             <Link to="/" className="nav-link">Home</Link>
// // //             <Link to="/shopall" className="nav-link">Shop All</Link>
// // //             <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
// // //             <Link to="/tablets" className="nav-link">Tablets</Link>
// // //             <Link to="/accessories" className="nav-link">Accessories</Link>
// // //             <Link to="/about" className="nav-link">About</Link>
// // //             <Link to="/contact" className="nav-link">Contact Us</Link>
// // //           </Nav>

// // //           <Nav className="ms-auto align-items-center">

// // //             {/* Admin View */}
// // //             {isAdmin && (
// // //               <div className="d-flex align-items-center me-3">
// // //                 <FaUserShield size={22} className="me-1 text-danger" />
// // //                 <span className="text-danger fw-semibold">Admin</span>
// // //                 <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
// // //               </div>
// // //             )}

// // //             {/* Customer View with Dropdown */}
// // //             {isCustomer && (
// // //               <div className="dropdown me-3">
// // //                 <button
// // //                   className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
// // //                   type="button"
// // //                   id="customerDropdown"
// // //                   data-bs-toggle="dropdown"
// // //                   aria-expanded="false"
// // //                 >
// // //                   <FaUserCircle className="me-2" />
// // //                   {user.name}
// // //                 </button>
// // //                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="customerDropdown">
// // //                   <li><span className="dropdown-item text-muted fw-bold">📦 Your Orders</span></li>
// // //                   <li><hr className="dropdown-divider" /></li>
// // //                   {orders.length > 0 ? (
// // //                     orders.map((order, index) => (
// // //                       <li key={index}>
// // //                         <span className="dropdown-item">
// // //                           {order.name} - ₹{order.price}
// // //                           <br />
// // //                           <small className="text-muted">{order.orderDate}</small>
// // //                         </span>
// // //                       </li>
// // //                     ))
// // //                   ) : (
// // //                     <li><span className="dropdown-item text-muted">No orders yet</span></li>
// // //                   )}
// // //                   <li><hr className="dropdown-divider" /></li>
// // //                   <li>
// // //                     <button className="dropdown-item text-danger" onClick={handleLogout}>
// // //                       Logout
// // //                     </button>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* If Not Logged In */}
// // //             {!user && (
// // //               <>
// // //                 <Link to="/login" className="nav-link d-flex align-items-center me-3">
// // //                   <FaUserCircle className="me-1 text-primary" />
// // //                   Customer Login
// // //                 </Link>
// // //                 <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold me-3">
// // //                   <FaUserShield className="me-1" />
// // //                   Admin Login
// // //                 </Link>
// // //               </>
// // //             )}

// // //             {/* Cart Icon */}
// // //             <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
// // //               <span role="img" aria-label="cart">🛒</span>
// // //               <span className="ms-1 badge bg-danger text-white rounded-pill">
// // //                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
// // //               </span>
// // //             </Link>
// // //           </Nav>
// // //         </Navbar.Collapse>
// // //       </Container>
// // //     </Navbar>
// // //   );
// // // };

// // // export default NavigationBar;


// // import React, { useEffect, useState } from 'react';
// // import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FaUserCircle, FaUserShield } from 'react-icons/fa';
// // import { useCart } from './CartContext';

// // const NavigationBar = () => {
// //   const { cartItems } = useCart();
// //   const [user, setUser] = useState(null);
// //   const [userOrders, setUserOrders] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem('user'));
// //     if (storedUser) {
// //       setUser(storedUser);
// //       const allData = JSON.parse(localStorage.getItem('usersData')) || {};
// //       const orders = allData[storedUser.email]?.purchases || [];
// //       setUserOrders(orders);
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //     navigate('/');
// //   };

// //   const isAdmin = user?.role === 'admin';
// //   const isCustomer = user?.role === 'customer';

// //   return (
// //     <Navbar bg="light" expand="lg" className="shadow-sm">
// //       <Container>
// //         <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="navbar-nav" />
// //         <Navbar.Collapse id="navbar-nav">
// //           <Nav className="mx-auto">
// //             <Link to="/" className="nav-link">Home</Link>
// //             <Link to="/shopall" className="nav-link">Shop All</Link>
// //             <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
// //             <Link to="/tablets" className="nav-link">Tablets</Link>
// //             <Link to="/accessories" className="nav-link">Accessories</Link>
// //             <Link to="/about" className="nav-link">About</Link>
// //             <Link to="/contact" className="nav-link">Contact Us</Link>
// //           </Nav>

// //           <Nav className="ms-auto align-items-center">
// //             {/* Admin */}
// //             {isAdmin && (
// //               <div className="d-flex align-items-center me-3">
// //                 <FaUserShield size={22} className="me-1 text-danger" />
// //                 <span className="text-danger fw-semibold">Admin</span>
// //                 <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
// //               </div>
// //             )}

// //             {/* Customer Dropdown */}
// //             {isCustomer && (
// //               <Dropdown align="end" className="me-3">
// //                 <Dropdown.Toggle variant="light" className="d-flex align-items-center">
// //                   <FaUserCircle className="me-2 text-primary" />
// //                   <span className="fw-semibold">{user.name}</span>
// //                 </Dropdown.Toggle>
// //                 <Dropdown.Menu>
// //                   {userOrders.length === 0 ? (
// //                     <Dropdown.Item disabled>No Orders Yet</Dropdown.Item>
// //                   ) : (
// //                     userOrders.map((order, index) => (
// //                       <Dropdown.Item key={index}>
// //                         {order.title || order.name || 'Product'} - ₹{order.price}
// //                       </Dropdown.Item>
// //                     ))
// //                   )}
// //                   <Dropdown.Divider />
// //                   <Dropdown.Item onClick={handleLogout} className="text-danger">Logout</Dropdown.Item>
// //                 </Dropdown.Menu>
// //               </Dropdown>
// //             )}

// //             {/* Not Logged In */}
// //             {!user && (
// //               <>
// //                 <Link to="/login" className="nav-link d-flex align-items-center me-3">
// //                   <FaUserCircle className="me-1 text-primary" />
// //                   Customer Login
// //                 </Link>
// //                 <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold me-3">
// //                   <FaUserShield className="me-1" />
// //                   Admin Login
// //                 </Link>
// //               </>
// //             )}

// //             {/* Cart Icon */}
// //             <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
// //               <span role="img" aria-label="cart">🛒</span>
// //               <span className="ms-1 badge bg-danger text-white rounded-pill">
// //                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
// //               </span>
// //             </Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // export default NavigationBar;

// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserCircle, FaUserShield } from 'react-icons/fa';
// import { useCart } from './CartContext';

// const NavigationBar = () => {
//   const { cartItems } = useCart();
//   const [user, setUser] = useState(null);
//   const [userOrders, setUserOrders] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//       const allData = JSON.parse(localStorage.getItem('usersData')) || {};
//       const orders = allData[storedUser.email]?.purchases || [];
//       setUserOrders(orders);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/');
//   };

//   const isAdmin = user?.role === 'admin';
//   const isCustomer = user?.role === 'customer';

//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm">
//       <Container>
//         <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="mx-auto">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/shopall" className="nav-link">Shop All</Link>
//             <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
//             <Link to="/tablets" className="nav-link">Tablets</Link>
//             <Link to="/accessories" className="nav-link">Accessories</Link>
//             <Link to="/about" className="nav-link">About</Link>
//             <Link to="/contact" className="nav-link">Contact Us</Link>
//           </Nav>

//           <Nav className="ms-auto align-items-center">

//             {/* Admin Display */}
//             {isAdmin && (
//               <div className="d-flex align-items-center me-3">
//                 <FaUserShield size={22} className="me-1 text-danger" />
//                 <span className="text-danger fw-semibold">Admin</span>
//                 <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
//               </div>
//             )}

//             {/* Customer Dropdown */}
//             {isCustomer && (
//               <Dropdown align="end" className="me-3">
//                 <Dropdown.Toggle variant="light" className="d-flex align-items-center">
//                   <FaUserCircle className="me-2 text-primary" />
//                   <span className="fw-semibold">{user.name}</span>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu style={{ minWidth: '300px', maxHeight: '300px', overflowY: 'auto' }}>
//                   {userOrders.length === 0 ? (
//                     <Dropdown.Item disabled>No Orders Yet</Dropdown.Item>
//                   ) : (
//                     userOrders.map((order, index) => (
//                       <Dropdown.Item key={index} className="d-flex align-items-start">
//                         <Image
//                           src={order.image || 'https://via.placeholder.com/50'}
//                           rounded
//                           width={50}
//                           height={50}
//                           className="me-2"
//                         />
//                         <div>
//                           <div className="fw-semibold">{order.title || order.name}</div>
//                           <div className="text-muted">₹{order.price}</div>
//                         </div>
//                       </Dropdown.Item>
//                     ))
//                   )}
//                   <Dropdown.Divider />
//                   <Dropdown.Item onClick={handleLogout} className="text-danger text-center">
//                     Logout
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             )}

//             {/* Not Logged In */}
//             {!user && (
//               <>
//                 <Link to="/login" className="nav-link d-flex align-items-center me-3">
//                   <FaUserCircle className="me-1 text-primary" />
//                   Customer Login
//                 </Link>
//                 <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold me-3">
//                   <FaUserShield className="me-1" />
//                   Admin Login
//                 </Link>
//               </>
//             )}

//             {/* Cart Icon */}
//             <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
//               <span role="img" aria-label="cart">🛒</span>
//               <span className="ms-1 badge bg-danger text-white rounded-pill">
//                 {cartItems.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

// NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaUserShield } from 'react-icons/fa';
import { useCart } from './CartContext';

const NavigationBar = () => {
  const { cartItems } = useCart();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    if (storedUser) setUser(storedUser);
    setOrders(storedOrders);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const isAdmin = user?.role === 'admin';
  const isCustomer = user?.role === 'customer';

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold fs-4">Toggle Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shopall" className="nav-link">Shop All</Link>
            <Link to="/mobiles" className="nav-link">Mobile Phones</Link>
            <Link to="/tablets" className="nav-link">Tablets</Link>
            <Link to="/accessories" className="nav-link">Accessories</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            {/* Admin Logged In */}
            {isAdmin && (
              <div className="d-flex align-items-center me-3">
                <FaUserShield size={22} className="me-1 text-danger" />
                <span className="text-danger fw-semibold">Admin</span>
                <button className="btn btn-sm btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
              </div>
            )}

            {/* Customer Logged In */}
            {isCustomer && (
              <Dropdown align="end" className="me-3">
                <Dropdown.Toggle variant="light" className="d-flex align-items-center">
                  <FaUserCircle className="me-1 text-primary" />
                  <span className="fw-semibold">{user.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: '320px' }}>
                  <Dropdown.Header className="fw-bold text-center text-primary fs-6">
                    🛍️ My Orders
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  {orders.length === 0 ? (
                    <Dropdown.ItemText className="text-muted text-center">No orders found</Dropdown.ItemText>
                  ) : (
                    orders.map((order, index) => (
                      <Dropdown.ItemText key={index} className="d-flex align-items-center mb-2">
                        <Image
                          src={`/images/${order.image}`}
                          alt={order.title}
                          width={50}
                          height={50}
                          rounded
                          className="me-2 border"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/default.jpg'; // fallback image
                          }}
                        />
                        <div>
                          <div className="fw-semibold">{order.title}</div>
                          <div className="text-muted">₹{order.price}</div>
                        </div>
                      </Dropdown.ItemText>
                    ))
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="text-danger text-center fw-semibold">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}

            {/* Not Logged In */}
            {!user && (
              <>
                <Link to="/login" className="nav-link d-flex align-items-center me-3">
                  <FaUserCircle className="me-1 text-primary" />
                  Customer Login
                </Link>
                <Link to="/admin-login" className="nav-link d-flex align-items-center text-danger fw-semibold me-3">
                  <FaUserShield className="me-1" />
                  Admin Login
                </Link>
              </>
            )}

            {/* Cart */}
            <Link to="/cart" className="nav-link position-relative d-flex align-items-center">
              🛒
              <span className="ms-1 badge bg-danger text-white rounded-pill">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


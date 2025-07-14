
// ----
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./NavBar";
import { CartProvider } from "./CartContext";
import HomeCarousel from "./HomeCarousel";
 import PopularProducts from "./PopularProducts";
import { Container } from "react-bootstrap";
import CartPage from './CartPage';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import CustomerLogin from './CustomerLogin';
import AdminPanel from './AdminPanel';
import Tablets from './Tablets';
import Accessories from './Accessories';
import ShopAll from "./ShopAll";
import PaymentPage from './PaymentPage';
import OrderSuccess from './OrderSuccess';
import MyOrders from './MyOrders';


const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'admin';

  return (
    <CartProvider>
      <Router>
        <Container fluid>
          <NavigationBar />
          <Container>
           
            <Routes>
  <Route
    path="/"
    element={
      <>
        <HomeCarousel />
        <PopularProducts />
        <Tablets />
        <Accessories />
        
      </>
    }
  />
  <Route path="/tablets" element={<Tablets />} />
  <Route path="/cart" element={<CartPage />} />
   <Route path="/mobiles" element={<PopularProducts />} />
   <Route path="/Accessories" element={<Accessories />} />
   <Route path="/ShopAll" element={<ShopAll/>} />
   <Route path="/payment" element={<PaymentPage />} />
   <Route path="/order-success" element={<OrderSuccess />} />
     <Route path="/my-orders" element={<MyOrders />} />


   

  <Route
    path="/admin"
    element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin-login" />}
  />

  <Route path="/login" element={<CustomerLogin />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/admin" element={<AdminPanel />} />
  <Route path="/admin-dashboard" element={<AdminDashboard />} />

  
  {/* <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} /> */}
</Routes>

          </Container>
        </Container>
      </Router>
    </CartProvider>
  );
};

export default App;



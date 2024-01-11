import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Payment from "./components/cart/Payment";
import PaySuccess from "./components/cart/PaySuccess";
import OrderTabel from "./components/Tabel/OrderTabel";
import MyProfile from "./components/login/MyProfile";
import Order from "./components/MyOrders/Order";
import Dashboard from "./components/admin/Dashboard";
import ViewOrder from "./components/admin/ViewOrder";
import ViewUser from "./components/admin/ViewUser";
import PageNotFound from "./components/layout/PageNotFound";

import "../src/styles/app.scss";
import "../src/styles/header.scss";
import "../src/styles/home.scss";
import "../src/styles/menu.scss";
import "../src/styles/footer.scss";
import "../src/styles/about.scss";
import "../src/styles/contact.scss";
import "../src/styles/cart.scss";
import "../src/styles/shipping.scss";
import "../src/styles/payment.scss";
import "../src/styles/login.scss";
import "../src/styles/paysuccess.scss";
import "../src/styles/myorder.scss";
import "../src/styles/myprofile.scss";
import "../src/styles/order.scss";
import "../src/styles/dashboard.scss";
import "../src/styles/page404.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paysuccess" element={<PaySuccess />} />
        <Route path="/checkout" element={<Shipping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myorders" element={<OrderTabel />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/orders" element={<ViewOrder />} />
        <Route path="/admin/users" element={<ViewUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

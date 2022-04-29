import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarPromo from "./components/NavbarPromo";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import MainPage from "./pages/MainPage";
import PayPage from "./pages/PayPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <NavbarPromo /> */}
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart-panel" element={<CartPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/pay-page" element={<PayPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

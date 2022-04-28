import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPromo from "./components/NavbarPromo";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import FormPlay from "./pages/FormPlay";
import MainPage from "./pages/MainPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavbarPromo />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart/payment" element={<FormPlay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

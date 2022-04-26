import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPromo from "./components/NavbarPromo";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import MainPage from "./pages/MainPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavbarPromo />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

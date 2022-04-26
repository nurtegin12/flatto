import { Container } from "@mui/material";
import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../context/AdminContext";

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <h2>Admin panel</h2>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;

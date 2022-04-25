import { Container } from "@mui/material";
import React from "react";
import AdminTable from "../components/AdminTable";

const AdminPage = () => {
  return (
    <Container>
      <div>
        <h2>Admin panel</h2>
        <AdminTable />
      </div>
    </Container>
  );
};

export default AdminPage;

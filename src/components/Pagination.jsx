import { Button } from "@mui/material";
import React, { useContext } from "react";
import { clientContext } from "../context/ClientContext";

const Pagination = () => {
  const data = useContext(clientContext);
  const { totalCount, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage);

  return (
    <div>
      <Button variant="outlined" onClick={handlePagination}>
        Показать еще
      </Button>
    </div>
  );
};

export default Pagination;

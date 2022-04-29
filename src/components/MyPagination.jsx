import { Button } from "@mui/material";
import React from "react";
import { clientContext } from "../context/ClientContext";

const MyPagination = () => {
  const data = React.useContext(clientContext);
  const { handlePagination } = data;
  return (
    <div className="my-pagination">
      <Button
        color="success"
        style={{ marginTop: 20, marginBottom: 50 }}
        onClick={handlePagination}
        variant="outlined"
      >
        Показать ещё
      </Button>
    </div>
  );
};

export default MyPagination;

import { Container } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SearchFilterBlock from "../components/SearchFilterBlock";
import { clientContext } from "../context/ClientContext";
import MyPagination from "../components/MyPagination";

const MainPage = () => {
  const data = React.useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <SearchFilterBlock getProducts={getProducts} />
      </div>
      <div className="product-card-blocks">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <MyPagination />
    </Container>
  );
};

export default MainPage;

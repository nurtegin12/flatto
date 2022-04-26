import { Container } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SearchFilterBlock from "../components/SearchFilterBlock";
import { clientContext } from "../context/ClientContext";

const MainPage = () => {
  const data = React.useContext(clientContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <SearchFilterBlock />
      </div>

      <div className="product-card-blocks">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default MainPage;

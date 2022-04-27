import { Container } from "@mui/material";
import React, { useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/ProductCard";
import SearchFilterBlock from "../components/SearchFilterBlock";
import { clientContext } from "../context/ClientContext";

const MainPage = () => {
  const data = useContext(clientContext);
  const { products, getProducts, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <SearchFilterBlock getProducts={getProducts} />
      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={handlePagination}
        hasMore={true}
        loader={<h3>Lo...</h3>}
      >
        {" "}
        <div className="product-card-blocks">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </Container>
  );
};

export default MainPage;

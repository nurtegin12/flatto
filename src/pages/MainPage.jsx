import React, { useEffect } from "react";
import SearchFilterBlock from "../components/SearchFilterBlock";
import { clientContext } from "../context/ClientContext";

const MainPage = () => {
  const data = React.useContext(clientContext);
  const { getProducts, products } = data;

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <SearchFilterBlock />
    </div>
  );
};

export default MainPage;

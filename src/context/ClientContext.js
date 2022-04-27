import axios from "axios";
import React, { useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_PRODUCTS } from "../helpers/const";

export const clientContext = React.createContext();

const initState = {
  products: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(props);
  const getProducts = async () => {
    const response = await axios(`${API_PRODUCTS}${window.location.search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = 0;
  const products = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalCount = state.products.length;

  const handlePagination = (page) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        handlePagination: handlePagination,
        products: products,
        totalCount: totalCount,
        productsPerPage: productsPerPage,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;

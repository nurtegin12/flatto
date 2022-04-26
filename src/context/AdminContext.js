import axios from "axios";
import React, { useReducer } from "react";
import { API_PRODUCTS } from "../helpers/const";

export const adminContext = React.createContext();

const initState = {
  products: [],
  productToEdit: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContext = (props) => {
  const addProduct = async (newProduct) => {
    await axios.post(API_PRODUCTS, newProduct);
  };

  const getProducts = async () => {
    const response = await axios(API_PRODUCTS);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductsToEdit = async (id) => {
    const response = await axios(`${API_PRODUCTS}/${id}`);
    const action = {
      type: "GET_PRODUCTS_TO_EDIT",
      payload: response.data,
    };
    dispatch(action);
  };

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API_PRODUCTS}/${editedProduct.id}`, editedProduct);
    getProducts();
  };

  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <adminContext.Provider
      value={{
        addProduct: addProduct,
        getProducts: getProducts,
        deleteProduct: deleteProduct,
        getProductsToEdit: getProductsToEdit,
        saveEditedProduct: saveEditedProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContext;

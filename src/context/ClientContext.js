import axios from "axios";
import React, { useReducer } from "react";
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

  const getProducts = async () => {
    const response = await axios(API_PRODUCTS);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        products: state.products,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;

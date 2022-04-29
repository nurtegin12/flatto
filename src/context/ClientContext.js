import axios from "axios";
import React, { useReducer, useState } from "react";
import { API_CARD_DATAS, API_PRODUCTS } from "../helpers/const";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../pages/firebase";

export const clientContext = React.createContext();

const initState = {
  products: [],
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cartProducts: null,
  productDetails: null,
  user: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_PRODUCT_FROM_CART":
      return { ...state, cartProducts: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async () => {
    const response = await axios(`${API_PRODUCTS}${window.location.search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  // ! cart starts

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    const newProduct = {
      product: product,
      count: 1,
      subPrice: 0,
    };
    newProduct.subPrice = product.price * newProduct.count;
    cart.products.push(newProduct);

    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);

    const action = {
      type: "ADD_PRODUCT_TO_CART",
      payload: cart.products.length,
    };
    dispatch(action);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    let prod = cart.products.find((item) => {
      return item.product.id === id;
    });

    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = cart.products.filter((item) => {
      return item.product.id !== id;
    });
    cart.products = newCart;
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    const action = {
      type: "DELETE_PRODUCT_IN_CART",
      payload: cart.products.length,
    };
    dispatch(action);
    getProductFromCart();
  };

  const getProductFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const action = {
      type: "GET_PRODUCT_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const countInCart = (id, count) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (count < 1) {
      return;
    }
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
      }
      return item;
    });
    cart.totalPrice = cart.products.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductFromCart();
  };

  // ! cart ends

  // ! pagination starts

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfFirstProduct = 0;
  const indexOfLastProduct = currentPage * productsPerPage;

  const products = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePagination = () => {
    setCurrentPage(currentPage + 1);
  };

  // ! pagination ends

  const getProductDetails = async (id) => {
    const response = await axios(`${API_PRODUCTS}/${id}`);
    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const addFeedback = async (newFeedback, product) => {
    if (product.feedbacks) {
      product.feedbacks.push(newFeedback);
      await axios.patch(`${API_PRODUCTS}/${product.id}`, product);
    } else {
      product.feedbacks = [newFeedback];
      await axios.patch(`${API_PRODUCTS}/${product.id}`, product);
    }
  };

  // ! pay operation

  const addCardDatas = async (newCardData) => {
    await axios.post(API_CARD_DATAS, newCardData);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        addProductToCart: addProductToCart,
        checkProductInCart: checkProductInCart,
        deleteProductInCart: deleteProductInCart,
        getProductFromCart: getProductFromCart,
        countInCart: countInCart,
        handlePagination: handlePagination,
        getProductDetails: getProductDetails,
        addFeedback: addFeedback,
        authWithGoogle: authWithGoogle,
        logOut: logOut,
        addCardDatas: addCardDatas,
        products: products,
        cartCount: state.cartCount,
        cartProducts: state.cartProducts,
        productDetails: state.productDetails,
        user: state.user,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;

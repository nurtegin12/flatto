import React, { useReducer } from "react";

const adminContext = React.createContext();

const initState = {
  products: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AdminContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <adminContext.Provider>{props.children}</adminContext.Provider>;
};

export default AdminContext;

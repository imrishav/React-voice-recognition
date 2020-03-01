import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  colorName: "",
  alreadyDone: []
};

export const GlobalContext = createContext(initialState);

export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function changeColorName(color) {
    dispatch({
      type: "CHANGE",
      payload: color
    });
  }

  function addToAlready(color) {
    dispatch({
      type: "ADDTO",
      payload: color
    });
  }

  console.log("from Context", state);
  return (
    <GlobalContext.Provider
      value={{
        color: state.colorName,
        changeColor: changeColorName,
        already: addToAlready
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

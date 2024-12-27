import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../Hooks/Reducer'; // Correct path to Reducer
import CartItem from '../Cart/CartItem';
const AppContext = createContext();

const initialState = {
  cart: cartItems, // Initialize with local data
  loading: false,  // Not fetching data, so loading is false
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_ITEMS', payload: cartItems });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

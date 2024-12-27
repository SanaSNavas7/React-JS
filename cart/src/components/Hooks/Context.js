import React, { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './Reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
  cart: [],
  loading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCartItems = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'SET_ITEMS', payload: data });
    } catch (error) {
      console.error('Error fetching cart items:', error);
      dispatch({ type: 'SET_LOADING' });
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

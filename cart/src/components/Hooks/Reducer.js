// src/components/Hooks/Reducer.js

const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return { ...state, cart: action.payload, loading: false };
      case 'REMOVE_ITEM':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case 'INCREASE_AMOUNT':
        return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, amount: item.amount + 1 } : item) };
      case 'DECREASE_AMOUNT':
        return { ...state, cart: state.cart.map(item => item.id === action.payload ? { ...item, amount: Math.max(item.amount - 1, 1) } : item) };
      case 'CLEAR_CART':
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  export default reducer;
  
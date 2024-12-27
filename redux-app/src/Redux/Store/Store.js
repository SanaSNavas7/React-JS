// src/Redux/Store/Store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducer/Reducer'; // Use default import

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './productSlice';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
    cart:cartReducer
  },
});

export default store;

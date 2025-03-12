import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // ✅ Import reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Assign reducer to cart
  },
});

export default store;

// src/redux/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload);
        if (existingItem) {
          existingItem.quantity -= 1;
          if (existingItem.quantity === 0) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
          }
        }
      },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

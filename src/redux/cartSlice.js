import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExist) {
        addProductExist.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }

      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

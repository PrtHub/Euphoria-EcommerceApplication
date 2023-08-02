import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.clothes.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.clothes.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.clothes = state.clothes.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.clothes = [];
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.clothes.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    updateSize: (state, action) => {
      const { id, size } = action.payload;
      const item = state.clothes.find((item) => item.id === id);

      if (item) {
        item.size = size;
      }
    },
  },
});

export const {
  addToCart,
  removeItem,
  updateQuantity,
  resetCart,
  updateSize,
} = cartReducer.actions;

export default cartReducer.reducer;
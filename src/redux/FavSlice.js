import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
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
  },
});

export const {  
  addToWishlist,
  removeItem,
  resetCart,
} = favSlice.actions;

export default favSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const listProduct = createSlice({
  name: "listProduct",
  initialState: {
    listProduct: [],
    cart: ['One Product'],
  },
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    showColumnProduct: (state, action) => {
      state.value = action.payload;
    },
    showGridProduct: (state, action) => {
      state.value = action.payload;
    },
    addProductToCart: (state, action) => {
      state.value = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  showColumnProduct,
  showGridProduct,
  addProductToCart,
  setListProduct,
} = listProduct.actions;

console.log(listProduct.actions.setListProduct());
export default listProduct.reducer;

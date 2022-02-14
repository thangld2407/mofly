import { configureStore } from "@reduxjs/toolkit";
import listProduct from "./reducerProduct";
export default configureStore({
  reducer: {
    product: listProduct,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./productSlice"

const appStore = configureStore({reducer:{
    cart: cartReducer
}});
export default appStore;

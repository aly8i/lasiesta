import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import filterReducer from"./filterSlice";
import tableReducer from"./tableSlice";
export default configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
      filter: filterReducer,
      table: tableReducer,
    },
  });

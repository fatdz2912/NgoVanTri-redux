import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./redux/slicers/common.slice";
import userReducer from "./redux/slicers/user.slice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
    user: userReducer,
  },
});

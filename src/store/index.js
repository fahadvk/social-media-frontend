import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import { loaderSlice } from "./LoaderSlice";
import UserSlice from "./UsersSlice";

const store = configureStore({
  reducer: {
    authReducer: AuthSlice.reducer,
    loadReducer: loaderSlice.reducer,
    userReducer: UserSlice.reducer,
  },
});
export default store;

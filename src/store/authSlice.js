/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    userName: "",
    userId:''
  },
  reducers: {
    setName: (state, actions) => {
      state.userName = actions.payload;
    },
    setAuth: (state, actions) => {
      state.auth = actions.payload;
    },
    setUserId:(state,actions) =>{
      state.userId = actions.payload
    }
  },
});
export const { setName, setAuth,setUserId } = AuthSlice.actions;
export default AuthSlice;

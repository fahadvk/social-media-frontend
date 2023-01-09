import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loading: false,
  },
  reducers: {
    changeLoad: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = action.payload;
    },
  },
});

export const { changeLoad } = loaderSlice.actions;

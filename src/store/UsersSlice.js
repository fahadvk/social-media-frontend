import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: { SuggestedUsers: [] },
  reducers: {
    setSuggestedUsers: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.SuggestedUsers = action.payload;
    },
  },
});
export const { setSuggestedUsers } = UserSlice.actions;

export default UserSlice;

/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const PostsSlice = createSlice({
  name: "auth",
  initialState: {
    Posts: [],
    LikesCount: 0,
    userId: "",
  },
  reducers: {
    setzPosts: (state, actions) => {
      state.userName = actions.payload;
    },
    setLikeCount: (state, actions) => {
      state.auth = actions.payload;
    },
    // setCommentCount: (state, actions) => {
    // //   state. = actions.payload;
    // },
  },
});
export const { setName, setAuth, setUserId } = PostsSlice.actions;
export default PostsSlice;

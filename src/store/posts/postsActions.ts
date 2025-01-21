import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsSlice";
import { postState } from "src/types/IPosts";

const initialState: postState = {
  posts: [],
  isLoadingPosts: false,
  editPostId: "",
  error: "",
};

export const postSlice = createSlice({
  initialState,
  reducers: {},
  name: "post",

  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoadingPosts = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoadingPosts = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.error = action.error.message ?? "";
    });
  },
});

export default postSlice.reducer;

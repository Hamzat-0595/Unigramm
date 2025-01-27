import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, getPosts } from "./postsSlice";
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

    builder.addCase(addPost.pending, (state) => {
      state.isLoadingPosts = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoadingPosts = false;
      state.posts.unshift(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.error = action.error.message ?? "";
    });

    builder.addCase(deletePost.pending, (state) => {
      state.isLoadingPosts = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.isLoadingPosts = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.error = action.error.message ?? "";
    });
  },
});

export default postSlice.reducer;

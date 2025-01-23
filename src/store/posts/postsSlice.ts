import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "src/api/baseService";
import { IPost } from "src/types/IPosts";

export const getPosts = createAsyncThunk("user/getPosts", async () => {
  const response = await baseService.get("/posts");
  return response.data;
});

export const addPosts = createAsyncThunk<IPost, Pick<IPost, "description">>(
  "users/addPosts",
  async (arg) => {
    const response = await baseService.post("/posts", {
      description: arg.description,
    });
    return response.data;
  }
);

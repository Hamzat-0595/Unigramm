import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "src/api/baseService";

export const getPosts = createAsyncThunk("user/getPosts", async () => {
  const response = await baseService.get("/posts");
  return response.data;
});

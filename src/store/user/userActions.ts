import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService, setToken } from "src/api/baseService";
import Cookies from "js-cookie";
import { Ilogin } from "src/types/IUser";

export const logIn = createAsyncThunk<
  Ilogin,
  { username: string; password: string }
>("users/logIn", async function (userData) {
  const res = await baseService.post("/user/sign-in", userData);
  Cookies.set("token", res.data.token);
  setToken();
  return res.data;
});

export const getUser = createAsyncThunk("user/get", async function () {
  const res = await baseService.get<Ilogin>("/user");
  return res.data;
});

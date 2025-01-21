import { createSlice } from "@reduxjs/toolkit";
import { getUser, logIn } from "./userActions";

import { UserState } from "src/types/IUser";

const initialState: UserState = {
  user: {
    _id: "",
    avatar: "",
    username: "",
  },
  isLoading: false,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutReduser: (state) => {
      state.user = {} as UserState["user"];
      state.isLoading = false;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(logIn.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
    });

    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user.username = action.payload.username;
      state.user._id = action.payload._id;
      state.user.avatar = action.payload.avatar;

      state.isLoading = false;
      state.isAuth = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { logoutReduser } = userSlice.actions;

export default userSlice.reducer;

import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import postSlice from "./posts/postsActions";
import userSlice from "./user/userSlice";

const rootReduser = combineReducers({
  user: userSlice,
  posts: postSlice,
});
export const store = configureStore({
  reducer: rootReduser,
  devTools: true,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

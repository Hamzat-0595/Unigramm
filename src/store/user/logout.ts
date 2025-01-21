import { baseService } from "src/api/baseService";
import { store } from "../store";
import { logoutReduser } from "./userSlice";
import Cookies from "js-cookies";

export const logout = () => {
  Cookies.remove("token");
  store.dispatch(logoutReduser());
};
baseService.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      return logout();
    }
    return error;
  }
);

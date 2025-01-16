import axios from "axios";
import Cookies from "js-cookies";
import { store } from "src/store/store";
import { logoutReduser } from "src/store/user/userSlice";

export const baseURL = "https://unigram-39h3.onrender.com";

export const baseService = axios.create({
  baseURL,
});
export const setToken = () => {
  baseService.defaults.headers.common["Authorization"] =
    "Bearer " + Cookies.get("token");
};

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

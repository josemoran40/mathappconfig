import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

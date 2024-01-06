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
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
export default instance;

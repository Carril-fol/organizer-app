import axios from "axios";
import { refreshTokens } from "./authServices";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        refreshTokens();
        const originalRequest = error.config;
        return API(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
  }
);

export default API;

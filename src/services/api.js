import axios from "axios";
import { refreshTokens } from "./authServices";

const API = axios.create(
  {
    baseURL: "https://restful-organizer.onrender.com",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  },
);


API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        await refreshTokens();
        const originalRequest = error.config;
        return API(originalRequest);
      } catch (refreshError) {
        console.error("Error al refrescar el token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
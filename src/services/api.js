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

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      // Si ya hay un intento de refrescar el token, se pone en cola la solicitud
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              resolve(API(originalRequest)); // Reintenta la solicitud original con el nuevo token
            },
            reject: (err) => reject(err),
          });
        });
      }

      // Si no se está refrescando el token, entonces hacerlo
      isRefreshing = true;

      try {
        const newTokens = await refreshTokens(); // Refresca el token
        processQueue(null, newTokens.accessToken); // Procesa la cola de solicitudes fallidas
        return API(originalRequest); // Reintenta la solicitud original
      } catch (refreshError) {
        processQueue(refreshError, null);
        console.error("Error al refrescar el token:", refreshError);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default API;

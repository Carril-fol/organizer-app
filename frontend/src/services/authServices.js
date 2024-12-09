import API from "./api";

const urlAuth = (endpoint) => {
  return `/users/api/v1/${endpoint}`;
};

export const register = async (userData) => {
  try {
    return await API.post(urlAuth("register"), userData);
  } catch (error) {
    const errorMessage = "Verifique los datos introducidos";
    throw new Error(errorMessage);
  }
}

export const login = async (userData) => {
  try {
    return await API.post(urlAuth("login"), userData, { withCredentials: true });
  } catch (error) {
    const errorMessage = "Crendenciales invalidas";
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  try {
    await API.post(urlAuth("logout"), {}, { withCredentials: true });
  } catch (error) {
    console.error("Error en logout:", error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
};

export const refreshTokens = () => {
  try {
    API.post(urlAuth("refresh"));
  } catch (error) {
    console.error("Error en el refresh:", error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}
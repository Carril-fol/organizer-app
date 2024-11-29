import API from "./api";

let header = { "Content-Type": "application/json" };

const urlAuth = (endpoint) => {
  return `/users/api/v1/${endpoint}`;
};

export const register = async (userData) => {
  try {
    await API.post(urlAuth("register"), userData, header);
  } catch (error) {
    const errorMessage = "Verifique los datos introducidos";
    throw new Error(errorMessage);
  }
}

export const login = async (userData) => {
  try {
    await API.post(urlAuth("login"), userData, { withCredentials: true }, header);
  } catch (error) {
    const errorMessage = "Crendenciales invalidas";
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  try {
    const response = await API.post(urlAuth("logout"), {}, { withCredentials: true });
    console.log(response.data);
  } catch (error) {
    console.error("Error en logout:", error.response?.data || error.message);
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
};
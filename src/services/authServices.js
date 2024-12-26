import API from "./api";

const urlAuth = (endpoint) => {
  return `/users/api/v1/${endpoint}`;
};

export const register = async (data) => {
  try {
    return await API.post(urlAuth("register"), data);
  } catch (error) {
    const errorMessage = "Verifique los datos introducidos";
    throw new Error(errorMessage);
  }
}

export const login = async (data) => {
  try {
    return await API.post(urlAuth("login"), data);
  } catch (error) {
    const errorMessage = "Crendenciales invalidas";
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  try {
    await API.post(urlAuth("logout"));
  } catch (error) {
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

export const detailFromUserRequested = async () => {
  try {
    const response = await API.get(urlAuth("detail"));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const updateDataFromUser = async (data) => {
  try {
    return await API.patch(urlAuth("update"), data);
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}
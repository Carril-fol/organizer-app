import API from "./api";

const urlTasks = (endpoint, taskId) => {
  return `/tasks/api/v1/${endpoint}/${taskId}`;
}

export const createTasks = (taskData, folderId) => {
  try {
    const response = API.post(`/tasks/api/v1/create/${folderId}`, taskData);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
};

export const updateTask = (taskData, taskId) => {
  try {
    const response = API.put(`/tasks/api/v1/update/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const deleteTask = async (taskId) => {
  try {
    const response = await API.delete(`/tasks/api/v1/delete/${taskId}`);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const getAllTasksFromFolder = async (folderId) => {
  try {
    const response = await API.get(`/tasks/api/v1/get/${folderId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}
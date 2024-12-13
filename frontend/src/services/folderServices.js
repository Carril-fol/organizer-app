import API from "./api";

const urlFolder = (endpoint) => {
  return `/folders/api/v1/${endpoint}`;
};

const urlFolderWithId = ({ endpoint, id }) => {
  return `/folders/api/v1/${endpoint}/${id}`;
};

export const createFolder = async (folderData) => {
  try {
    await API.post(urlFolder("create"), folderData);
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const getFolders = async () => {
  try {
    const response = await API.get(urlFolder("/"));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const updateFolder = async (id, name_folder) => {
  try {
    const folderData = { name_folder };
    const response = await API.put(urlFolderWithId({ endpoint: "update", id }), folderData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
};

export const deleteFolder = async (id) => {
  try {
    const response = await API.delete(urlFolderWithId({ endpoint: "delete", id: id }));
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}

export const detailFolder = async (id) => {
  try {
    const response = await API.get(urlFolderWithId({ endpoint: "detail", id: id }));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Error desconocido");
  }
}
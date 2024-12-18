import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getFolders, createFolder, detailFolder } from "../../services/folderServices";

const useFolderManager = () => {
  const [folders, setFolders] = useState([]);

  const fetchFolders = async () => {
    try {
      const response = await getFolders();
      setFolders(response.folders);
    } catch (error) {
      toast.error("Error al obtener carpetas");
    }
  };

  const handleCreateFolder = async (name_folder) => {
    try {
      await createFolder({ name_folder });
      fetchFolders();
    } catch (error) {
      toast.error("Error al crear carpeta");
    }
  };

  const handleFolderSelect = async (folderId, onFolderSelect) => {
    onFolderSelect(folderId);
    try {
      const response = await detailFolder(folderId);
      return response.data;
    } catch (error) {
      toast.error("Error al obtener los detalles de la carpeta.");
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return {
    folders,
    fetchFolders,
    handleCreateFolder,
    handleFolderSelect,
  };
};

export { useFolderManager };

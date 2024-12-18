import { useState, useEffect } from "react";
import { deleteFolder } from "../../services/folderServices";

const useDeleteFolderForm = ({ folder, fetchFolders, onClose }) => {
  const [name_folder, setNameFolder] = useState("");

  useEffect(() => {
    setNameFolder(folder?.name_folder || "");
  }, [folder]);

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteFolder(folder._id);
      if (response?.status == 200) {
        fetchFolders();
        onClose();
        window.location.reload();
      }
    } catch (error) {
      throw new Error("Error al eliminar la carpeta:", error);
    }
  };
  return { name_folder, handleSubmitDelete };
};

export { useDeleteFolderForm };

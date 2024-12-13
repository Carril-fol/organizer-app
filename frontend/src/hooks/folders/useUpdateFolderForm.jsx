import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { updateFolder } from "../../services/folderServices";

const useUpdateFolderForm = ({ folder, fetchFolders, onClose }) => {
  const [name_folder, setNameFolder] = useState("");

  useEffect(() => {
    setNameFolder(folder.name_folder);
  }, [folder]);

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    if (folder.name_folder === name_folder.trim()) {
      onClose();
      return;
    }
    if (!name_folder.trim()) {
      toast.error("El nombre de la carpeta no puede estar vacío.");
      return;
    }

    try {
      await updateFolder(folder._id, name_folder.trim());
      toast.success("Carpeta actualizada correctamente.");
      fetchFolders();
      onClose();
    } catch (error) {
      toast.error("Error al actualizar la carpeta.");
    }
  };

  return { name_folder, setNameFolder, handleSubmitUpdate };
};

export default useUpdateFolderForm;
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useUpdateFolderForm = ({ folder, onUpdate, onClose }) => {
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
      await onUpdate(folder._id, name_folder.trim());
      toast.success("Carpeta actualizada correctamente.");  // Asegúrate de que el toast de éxito se llame
      onClose();
    } catch (error) {
      toast.error("Error al actualizar la carpeta.");  // Si algo sale mal, mostramos un error
    }
  };

  return { name_folder, setNameFolder, handleSubmitUpdate };
};

export default useUpdateFolderForm;
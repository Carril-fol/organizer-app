import { useState, useEffect } from "react";

const useDeleteFolderForm = ({ folder, onDelete, onClose }) => {
  const [name_folder, setNameFolder] = useState("");

  useEffect(() => {
    setNameFolder(folder?.name_folder || "");
  }, [folder]);

  const handleSubmitDelete = async (e) => {
    e.preventDefault();
    await onDelete(folder._id);
    onClose();
  };

  return { name_folder, handleSubmitDelete };
};

export default useDeleteFolderForm;

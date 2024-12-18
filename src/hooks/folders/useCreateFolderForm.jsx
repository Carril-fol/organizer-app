import { useState } from "react";

const useCreateFolderForm = (onCreate) => {
  const [name_folder, setName_folder] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name_folder.trim()) return;
    await onCreate(name_folder);
    setName_folder("");
  };

  return {
    name_folder,
    setName_folder,
    handleSubmit,
  };
};

export { useCreateFolderForm };
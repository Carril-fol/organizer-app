import { useState, useEffect } from "react";
import { Folder } from "lucide-react";

import FolderList from "../lists/FolderLists";
import CreateFolderForm from "../../forms/folders/CreateFolderForm";
import { getFolders, createFolder, detailFolder } from "../../../services/folderServices";

const FolderManager = ({ onFolderSelect }) => {
  const [folders, setFolders] = useState([]);

  const handleFolderSelect = async (folderId) => {
    onFolderSelect(folderId);
    try {
      const response = await detailFolder(folderId);
      return response.data;
    } catch (error) {
      toast.error("Error al obtener los detalles de la carpetas.");
    }
  };

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

  useEffect(() => {
    fetchFolders();
  }, []);

  return (
    <div>
      <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
        <Folder />
        <h2 className="text-lg font-semibold">Carpetas</h2>
      </div>
      <CreateFolderForm onCreate={handleCreateFolder} />
      <FolderList folders={folders} fetchFolders={fetchFolders} onFolderSelect={handleFolderSelect} />
    </div>
  );
};

export default FolderManager;

import { useState, useEffect } from "react";
import { Folder } from "lucide-react";

import FolderList from "../lists/FolderLists";
import CreateFolderForm from "../../forms/folders/CreateFolderForm";
import { getFolders, createFolder } from "../../../services/folderServices";

const FolderManager = ({ onFolderSelect  }) => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState("");

  const fetchFolders = async () => {
    try {
      const response = await getFolders();
      setFolders(response.folders);
    } catch (error) {
      setError("Error al obtener carpetas");
    }
  };

  const handleCreateFolder = async (name_folder) => {
    try {
      await createFolder({ name_folder });
      fetchFolders();
    } catch (error) {
      setError("Error al crear carpeta");
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return (
    <div>
      <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
        <Folder />
        <h2 className="text-lg font-semibold">
          Carpetas
        </h2>
      </div>
      <CreateFolderForm onCreate={handleCreateFolder} />
      {error && <p className="text-red-500">{error}</p>}
      <FolderList
        folders={folders}
        fetchFolders={fetchFolders}
        onFolderSelect={onFolderSelect}
      />
    </div>
  );
};

export default FolderManager;

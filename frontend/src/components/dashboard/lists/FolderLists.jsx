import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import { Folder } from "lucide-react";

import UpdateFolderForm from "../../forms/folders/UpdateFolderForm";
import DeleteFolderForm from "../../forms/folders/DeleteFolderForm";
import { updateFolder, deleteFolder } from "../../../services/folderServices";

const FolderList = ({ folders, fetchFolders, onFolderSelect }) => {

  const handleUpdate = async (id, name_folder) => {
    try {
      await updateFolder(id, name_folder);
      fetchFolders();
    } catch (error) {
      throw new Error("Error al actualizar la carpeta:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFolder(id);
      fetchFolders();
    } catch (error) {
      throw new Error("Error al borrar la carpeta:", error)
    }
  }

  return (
    <div className="space-y-4 max-h-64 overflow-y-auto">
      {folders.map((folder) => (
        <Button
          key={folder._id}
          className="bg-transparent border rounded-lg flex items-center justify-between h-11 w-full"
          onClick={() => onFolderSelect(folder._id)}
        >
          <div className="flex items-center space-x-2">
            <Folder className="h-5 w-5" />
            <p>{folder.name_folder}</p>
          </div>
          <div className="flex">
            <UpdateFolderForm folder={folder} onUpdate={handleUpdate} />
            <DeleteFolderForm folder={folder} onDelete={handleDelete} />
          </div>
        </Button>
      ))}
    </div>
  );
};

FolderList.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchFolders: PropTypes.func.isRequired,
  onFolderSelect: PropTypes.func.isRequired,
};

export default FolderList;

import PropTypes from "prop-types";

import FolderItem from "../../folders/FolderItem";
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
        <FolderItem
          folder={folder}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          onFolderSelect={onFolderSelect}
        />
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

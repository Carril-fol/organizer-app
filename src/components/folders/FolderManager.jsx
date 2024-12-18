import PropTypes from "prop-types";
import { Folder } from "lucide-react";

import { FolderList } from "./FolderLists";
import { CreateFolderForm } from "../folders/forms/CreateFolderForm";
import { useFolderManager } from "../../hooks/folders/useFolderManager";

const FolderManager = ({ onFolderSelect }) => {
  const { folders, fetchFolders, handleCreateFolder, handleFolderSelect } = useFolderManager();

  return (
    <div>
      <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
        <Folder />
        <h2 className="text-lg font-semibold">Carpetas</h2>
      </div>
      <CreateFolderForm onCreate={handleCreateFolder} />
      <FolderList folders={folders} fetchFolders={fetchFolders} onFolderSelect={(folderId) => handleFolderSelect(folderId, onFolderSelect)} />
    </div>
  );
};

FolderManager.propTypes = {
  onFolderSelect: PropTypes.func.isRequired,
};

export { FolderManager };
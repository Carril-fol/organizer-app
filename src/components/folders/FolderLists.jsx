import PropTypes from "prop-types";
import { FolderItem } from "./FolderItem";

const FolderList = ({ folders, onFolderSelect, fetchFolders }) => {

  return (
    <div className="space-y-4 max-h-64 overflow-y-auto">
      {folders.map((folder) => (
        <FolderItem
          key={folder._id}
          folder={folder}
          fetchFolders={fetchFolders}
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

export { FolderList };

import { Button } from "@nextui-org/react";
import { Folder } from "lucide-react";

import UpdateFolderForm from "./forms/UpdateFolderForm";
import DeleteFolderForm from "./forms/DeleteFolderForm";

const FolderItem = ({ folder, fetchFolders, onFolderSelect }) => {
  return (
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
        <UpdateFolderForm folder={folder} fetchFolders={fetchFolders} />
        <DeleteFolderForm folder={folder} fetchFolders={fetchFolders} />
      </div>
    </Button>
  );
}

FolderItem.propTypes = {
  folder: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name_folder: PropTypes.string.isRequired,
  }).isRequired,
  fetchFolders: PropTypes.func.isRequired,
  onFolderSelect: PropTypes.func.isRequired
};


export default FolderItem;
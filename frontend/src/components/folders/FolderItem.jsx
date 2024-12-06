import { Button } from "@nextui-org/react";
import { Folder } from "lucide-react";

import UpdateFolderForm from "../forms/folders/UpdateFolderForm";
import DeleteFolderForm from "../forms/folders/DeleteFolderForm";

const FolderItem = ({ folder, handleDelete, handleUpdate, onFolderSelect }) => {
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
        <UpdateFolderForm folder={folder} onUpdate={handleUpdate} />
        <DeleteFolderForm folder={folder} onDelete={handleDelete} />
      </div>
    </Button>
  );
}

export default FolderItem;
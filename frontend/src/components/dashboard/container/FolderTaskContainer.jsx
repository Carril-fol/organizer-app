import { useState } from "react";

import FolderManager from "../managers/FolderManager";
import TaskManager from "../managers/TaskManager";

const FolderTaskContainer = () => {
  const [selectedFolder, setSelectedFolder] = useState("");

  return (
    <div className="w-screen h-screen flex">
      <aside className="min-w-[250px] p-4 border-r-2 border-black">
        <FolderManager onFolderSelect={setSelectedFolder} />
      </aside>
      <div className="flex-grow p-4">
        <TaskManager folderId={selectedFolder} />
      </div>
    </div>
  );
}
export default FolderTaskContainer;
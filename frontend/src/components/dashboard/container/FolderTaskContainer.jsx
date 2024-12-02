import { useState } from "react";

import { detailFolder } from "../../../services/folderServices";
import FolderManager from "../managers/FolderManager";
import TaskManager from "../managers/TaskManager";

const FolderTaskContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderSelect = async (folderId) => {
    setSelectedFolder(folderId);
    try {
      const response = await detailFolder(folderId);
      setTasks(response.data.tasks);
    } catch (error) {
      throw new Error("Error al obtener tareas:", error);
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center">
      <div className="flex w-full">
        <aside className="min-w-fit p-4 border-r-2 border-black">
          <FolderManager onFolderSelect={handleFolderSelect} />
        </aside>
        <div className="flex flex-col w-3/4 p-4">
          <div className="flex">
            <TaskManager tasks={tasks} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default FolderTaskContainer;
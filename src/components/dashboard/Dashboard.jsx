import { useState } from "react";
import Cookie from "js-cookies";

import { FolderManager } from "../folders/FolderManager";
import { TaskManager } from "../tasks/TaskManager";

const Dashboard = () => {
  const [selectedFolder, setSelectedFolder] = useState("");

  return (
    <section>
      <div className="w-screen h-screen flex">
        <aside className="min-w-[250px] p-4 border-r-2 border-black">
          <FolderManager onFolderSelect={setSelectedFolder} />
        </aside>
        <div className="flex-grow p-4">
          {selectedFolder ? (
            <TaskManager folderId={selectedFolder} />
          ) : (
            <p className="text-gray-500">Por favor, selecciona una carpeta para ver sus tareas.</p>
          )}
        </div>
      </div>
    </section>
  );
}
export default Dashboard;
import { useState } from "react";
import { Book } from "lucide-react";

import UpdateTaskForm from "./forms/UpdateTaskForm";
import DeleteTaskForm from "./forms/DeleteTaskForm";

const TaskItem = ({ task, fetchTasks }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`rounded-lg border transition-all duration-300 ease-in-out ${isHovered ? "bg-white shadow-md p-4" : "bg-gray-50 p-2"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Book />
        </div>
        <div className="flex-grow">
          <h2 className="font-semibold text-lg text-gray-800">{task.name}</h2>
          {isHovered && (
            <div className="mt-2">
              <p className="text-sm text-gray-600 truncate max-w-[200px]">
                {task.body || "Sin descripción"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Estado: <span className="font-medium">{task.status || "No especificado"}</span>
              </p>
            </div>
          )}
        </div>
        {isHovered && (
          <div className="flex gap-2">
            <UpdateTaskForm task={task} fetchAll={fetchTasks} />
            <DeleteTaskForm task={task} fetchAll={fetchTasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;

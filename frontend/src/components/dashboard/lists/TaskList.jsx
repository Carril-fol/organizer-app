import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ClipboardList } from 'lucide-react';

import Task from "../../tasks/Task";
import CreateTaskForm from "../../forms/tasks/CreateTaskForm";
import { getAllTasksFromFolder } from "../../../services/tasksServices";

const TaskList = ({ folderId }) => {
  const [tasks, setTasks] = useState([]);
  const hasTasks = tasks.length > 0;
  const isScrollable = tasks.length > 5;

  const fetchTasks = async () => {
    try {
      const response = await getAllTasksFromFolder(folderId);
      setTasks(response.tasks);
    } catch (error) {
      throw new Error("Error al obtener las tareas de la tarea", error);
    }
  }

  useEffect(() => {
    if (folderId) {
      fetchTasks();
    }
  }, [folderId]);

  return (
    <div className="w-full max-w-full">
      <div className="flex border-b-2 pb-4 mb-5 space-x-2 items-center">
        <ClipboardList />
        <h2 className="text-lg font-semibold">Lista de Tareas</h2>
      </div>
      <CreateTaskForm folderId={folderId} onTaskCreated={fetchTasks} />
      {
        hasTasks ? (
          <div className={`flex flex-col gap-5 ${isScrollable ? "overflow-y-auto max-h-[calc(100vh-200px)]" : ""}`}>
            <Task tasks={tasks} fetchTasks={fetchTasks} />
          </div>
        ) : (
          <p>No hay tareas disponibles.</p>
        )
      }
    </div>
  );
};

TaskList.propTypes = {
  folderId: PropTypes.string.isRequired,
};

export default TaskList;

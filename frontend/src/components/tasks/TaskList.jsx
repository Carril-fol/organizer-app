import PropTypes from "prop-types";
import { ClipboardList } from "lucide-react";
import Task from "./Task";
import CreateTaskForm from "../forms/tasks/CreateTaskForm";
import useTaskList from "../../hooks/tasks/useTaskList";

const TaskList = ({ folderId }) => {
  const { tasks, hasTasks, isScrollable, isLoading, error, fetchTasks } = useTaskList(folderId);

  return (
    <div className="w-full max-w-full">
      <div className="flex border-b-2 pb-4 mb-5 space-x-2 items-center">
        <ClipboardList />
        <h2 className="text-lg font-semibold">Lista de Tareas</h2>
      </div>
      <CreateTaskForm folderId={folderId} onTaskCreated={fetchTasks} />
      {isLoading && <p>Cargando tareas...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!isLoading && !error && (
        hasTasks ? (
          <div className={`flex flex-col gap-5 ${isScrollable ? "overflow-y-auto max-h-[calc(100vh-200px)]" : ""}`}>
            <Task tasks={tasks} fetchTasks={fetchTasks} />
          </div>
        ) : (
          <p>No hay tareas disponibles.</p>
        )
      )}
    </div>
  );
};

TaskList.propTypes = {
  folderId: PropTypes.string.isRequired,
};

export default TaskList;

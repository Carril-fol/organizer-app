import PropTypes from "prop-types";
import { ClipboardList } from "lucide-react";

import { TaskList } from "./TaskList";
import CreateTaskForm from "../tasks/forms/CreateTaskForm";
import { useTaskList } from "../../hooks/tasks/useTaskList";

const TaskManager = ({ folderId }) => {
  const { tasks, hasTasks, isScrollable, isLoading, error, fetchTasks } = useTaskList(folderId);

  return (
    <div className="w-full max-w-full">
      <div className="flex border-b-2 pb-4 mb-5 space-x-2 items-center">
        <ClipboardList />
        <h2 className="text-lg font-semibold">Lista de Tareas</h2>
      </div>
      <CreateTaskForm folderId={folderId} onTaskCreated={fetchTasks} />
      <TaskList
        isScrollable={isScrollable}
        isLoading={isLoading}
        error={error}
        hasTasks={hasTasks}
        tasks={tasks}
        fetchTasks={fetchTasks}
      />
    </div>
  );
};

TaskList.propTypes = {
  folderId: PropTypes.string.isRequired,
};

export { TaskManager };

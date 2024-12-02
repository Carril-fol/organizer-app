import PropTypes from "prop-types";
import { ClipboardList } from "lucide-react";

import CreateTaskForm from "../../forms/tasks/CreateTaskForm";

const TaskList = ({ tasks }) => {
  return (
    <div className="min-w-full">
      <div className="flex border-b-2 pb-4 mb-5 space-x-2 items-center">
        <ClipboardList />
        <h2 className="text-lg font-semibold">
          Lista de Tareas
        </h2>
      </div>
      <CreateTaskForm />
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="p-2 border rounded">
              {task.name}
            </div>
          ))
        ) : (
          <p>No hay tareas disponibles.</p>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskList;
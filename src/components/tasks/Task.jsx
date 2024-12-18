import { TaskItem } from "./TaskItem";

const Task = ({ tasks, fetchTasks }) => {
  if (tasks.length === 0) {
    return <p>No hay tareas en esta carpeta.</p>;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} fetchTasks={fetchTasks}/>
      ))}
    </div>
  );
};

export { Task };


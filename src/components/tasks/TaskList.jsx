import { Task } from "./Task";

const TaskList = ({ isScrollable, isLoading, error, hasTasks, tasks, fetchTasks }) => {
  return (
    <div>
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
}

export { TaskList };
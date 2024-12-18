import { useEffect, useState } from "react";
import { getAllTasksFromFolder } from "../../services/tasksServices";

const useTaskList = (folderId) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasTasks = tasks.length > 0;
  const isScrollable = tasks.length > 5;

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getAllTasksFromFolder(folderId);
      setTasks(response.tasks);
    } catch (err) {
      setError(err.message || "Error al obtener las tareas");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (folderId) {
      fetchTasks();
    }
  }, [folderId]);

  return {
    tasks,
    hasTasks,
    isScrollable,
    isLoading,
    error,
    fetchTasks,
  };
};

export { useTaskList };

import { useState } from "react";
import { toast } from "react-toastify";

import { deleteTask } from "../../services/tasksServices";

const useDeleteTaskForm = ({ task, fetchAll, onClose }) => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteTask(task._id);
      if (response?.status === 200) {
        fetchAll();
        onClose();
        toast.success("Se borro la tarea exitosamente.")
      } else {
        toast.error("No se pudo eliminar la tarea. Intenta nuevamente.");
      }
    } catch (error) {
      setError(error.response?.data?.msg || "Error desconocido al borrar la tarea.");
    }
  };

  return {
    error,
    handleSubmit,
  };
};

export default useDeleteTaskForm;

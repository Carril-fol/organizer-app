import { useState } from "react";
import { toast } from "react-toastify";
import { updateTask } from "../../services/tasksServices";

const useUpdateTaskForm = ({ task, fetchAll, onClose }) => {
  const [name, setName] = useState(task.name);
  const [body, setBody] = useState(task.body || "");
  const [status, setStatus] = useState(task.status);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El campo 'Nombre de la tarea' no puede estar vacío.");
      return;
    }

    const taskData = { name, body, status };
    try {
      const response = await updateTask(taskData, task._id);
      if (response?.status === 200) {
        toast.success("Tarea actualizada con éxito.");
        fetchAll();
        onClose();
      } else {
        toast.error("No se pudo actualizar la tarea. Intenta nuevamente.");
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error al actualizar la tarea.");
    }
  };

  return {
    name,
    body,
    status,
    error,
    setName,
    setBody,
    setStatus,
    handleSubmit,
  };
};

export default useUpdateTaskForm;

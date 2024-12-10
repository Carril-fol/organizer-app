import { useState } from "react";
import { createTasks } from "../../services/tasksServices";

const useCreateTaskForm = ({ folderId, onTaskCreated, onClose }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setName("");
    setBody("");
    setStatus("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = { name, body, status };
      const response = await createTasks(taskData, folderId);
      if (response.status === 201) {
        onTaskCreated();
        resetForm();
        onClose();
      }
    } catch (err) {
      setError(err.message);
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
    resetForm,
  };
};

export default useCreateTaskForm;

import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Pencil, Check, X, ClipboardCheck } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

import { updateTask } from "../../../services/tasksServices";

const UpdateTaskForm = ({ task, fetchAll }) => {
  const [name, setName] = useState(task.name);
  const [body, setBody] = useState(task.body || "");
  const [status, setStatus] = useState(task.status);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");

  const optionsTask = ["Completed", "Not Completed", "In Process"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Los campos 'Nombre de la tarea' no pueden estar vacíos.");
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

  return (
    <>
      <Button className="bg-transparent max-w-fit max-h-fit flex items-center justify-center" onClick={onOpen}>
        <Pencil className="w-4" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>
            <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
              <ClipboardCheck />
              <h2>Actualizar tarea</h2>
            </div>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                isRequired
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de la tarea"
              />
              <Textarea
                isRequired
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Descripción de la tarea"
              />
              <Select
                isRequired
                label="Estado de la tarea"
                placeholder="Selecciona el estado actual"
                selectedKeys={new Set([status])}
                onSelectionChange={(selected) => setStatus(Array.from(selected).join(""))}
              >
                {optionsTask.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
                  </SelectItem>
                ))}
              </Select>
              {error && <p className="text-red-600">{error}</p>}
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="ghost" onClick={onClose}>
                  <X />
                </Button>
                <Button type="submit" className="bg-black text-white">
                  <Check />
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

UpdateTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  fetchAll: PropTypes.func.isRequired,
};

export default UpdateTaskForm;

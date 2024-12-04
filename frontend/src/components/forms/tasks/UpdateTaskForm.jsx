import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem } from "@nextui-org/react";
import { Pencil, Check, X, ClipboardCheck } from "lucide-react";

import { updateTask } from "../../../services/tasksServices";

const UpdateTaskForm = ({ task, onUpdate }) => {
  const [name, setName] = useState(task.name);
  const [body, setBody] = useState(task.body || "");
  const [status, setStatus] = useState(task.status);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");

  const optionsTask = ["Completed", "Not Completed", "In Process"];

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const taskData = { name, body, status };
    try {
      updateTask(taskData, task._id);
      await onUpdate()
      onClose();
    } catch (error) {
      throw new Error("Error al actualizar la tarea:", error)
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
            <form className="space-y-6" onSubmit={handleUpdateTask}>
              <Input isRequired value={name} onChange={(e) => setName(e.target.value)} />
              <Input isRequired value={body} onChange={(e) => setBody(e.target.value)} />
              <Select
                isRequired
                label="Estado de la tarea"
                placeholder="Selecciona el estado actual"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {optionsTask.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
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
    </>
  );
};

UpdateTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateTaskForm;

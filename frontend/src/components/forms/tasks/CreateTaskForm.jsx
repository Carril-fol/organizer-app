import { useState } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem } from "@nextui-org/react";
import { Plus, ClipboardList, Check } from "lucide-react";

import { createTasks } from "../../../services/tasksServices";

const CreateTaskForm = ({ folderId, onTaskCreated }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState("");

  const optionsTask = ["Completed", "Not Completed", "In Process"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = { name, body, status };
      const response = await createTasks(taskData, folderId);
      if (response.status == 201) {
        onTaskCreated();
      }
      setName("");
      setBody("");
      setStatus("");
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
      <div className="flex mb-4">
        <Button className="flex items-center bg-black text-white font-semibold" onClick={onOpen}>
          <Plus className="h-5 w-5" />
          Añadir tarea
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>
            <div className="flex w-full border-b-2 pb-4 space-x-2 items-center">
              <ClipboardList />
              <h2>Crear tarea</h2>
            </div>
          </ModalHeader>
          <ModalBody className="p-5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                isRequired
                type="text"
                label="Título"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe el título de la tarea"
                required
              />
              <Input
                type="text"
                label="Descripción"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Escribe una descripción"
                required
              />
              <Select
                isRequired
                label="Estado de la tarea"
                placeholder="Selecciona el estado actual"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                {optionsTask.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </Select>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex justify-end gap-2 mt-4">
                <Button type="submit" variant="solid" className="bg-black text-white flex items-center justify-center">
                  <Check className="h-5 w-5 mr-1" />
                  Crear
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTaskForm;

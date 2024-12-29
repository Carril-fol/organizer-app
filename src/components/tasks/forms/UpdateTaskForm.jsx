import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import { 
  Button, 
  Input, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  useDisclosure, 
  Select, 
  SelectItem, 
  Textarea
} from "@nextui-org/react";
import { Pencil, Check, X, ClipboardCheck } from "lucide-react";
import { useUpdateTaskForm } from "../../../hooks/tasks/useUpdateTaskForm";

const UpdateTaskForm = ({ task, fetchAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    name,
    body,
    status,
    setName,
    setBody,
    setStatus,
    handleSubmit,
  } = useUpdateTaskForm({ task, fetchAll, onClose });

  const optionsTask = ["Completo", "Incompleto", "En Proceso"];

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
  fetchAll: PropTypes.func.isRequired,
};

export default UpdateTaskForm;

import PropTypes from "prop-types";
import { 
  Button, 
  Input, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  useDisclosure 
} from "@nextui-org/react";
import { Trash2, Check, X, Book } from "lucide-react";
import { useDeleteTaskForm } from "../../../hooks/tasks/useDeleteTaskForm";

const DeleteTaskForm = ({ task, fetchAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { error, handleSubmit } = useDeleteTaskForm({ task, fetchAll, onClose });

  return (
    <>
      <Button className="bg-transparent max-w-fit max-h-fit flex items-center justify-center" onClick={onOpen}>
        <Trash2 className="w-4" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>
            <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
              <Book />
              <h2>Eliminar tarea</h2>
            </div>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input isDisabled value={task.name} />
              <Input isDisabled value={task.body || "Sin descripción"} />
              <Input isDisabled value={task.status || "Sin estado"} />
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

DeleteTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  fetchAll: PropTypes.func.isRequired,
};

export default DeleteTaskForm;

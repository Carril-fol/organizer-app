import PropTypes from "prop-types";
import { Folder, Trash2, X } from "lucide-react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import useDeleteFolderForm from "../../../hooks/folders/useDeleteFolderForm";

const DeleteFolderForm = ({ folder, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name_folder, handleSubmitDelete } = useDeleteFolderForm({ folder, onDelete, onClose });

  return (
    <>
      <Button
        className="bg-transparent max-w-fit max-h-fit flex items-center justify-center"
        onClick={onOpen}
      >
        <Trash2 className="w-4" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>
            <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
              <Folder />
              <h2>Eliminar carpeta</h2>
            </div>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitDelete}>
              <Input isDisabled value={name_folder} />
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="ghost" onClick={onClose}>
                  <X />
                </Button>
                <Button type="submit" variant="solid" color="danger">
                  <Trash2 />
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteFolderForm.propTypes = {
  folder: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name_folder: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteFolderForm;

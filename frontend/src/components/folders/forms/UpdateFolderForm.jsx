import PropTypes from "prop-types";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Pencil, Check, X, Folder } from "lucide-react";
import useUpdateFolderForm from "../../../hooks/folders/useUpdateFolderForm";

const UpdateFolderForm = ({ folder, fetchFolders }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name_folder, setNameFolder, handleSubmitUpdate } = useUpdateFolderForm({ folder, fetchFolders, onClose });

  return (
    <>
      <Button
        className="bg-transparent max-w-fit max-h-fit flex items-center justify-center"
        onClick={onOpen}
      >
        <Pencil className="w-4" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader>
            <div className="flex w-full border-b-2 pb-4 mb-5 space-x-2 items-center">
              <Folder />
              <h2>Actualizar carpeta</h2>
            </div>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitUpdate}>
              <Input
                isRequired
                value={name_folder}
                onChange={(e) => setNameFolder(e.target.value)}
              />
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

UpdateFolderForm.propTypes = {
  folder: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name_folder: PropTypes.string.isRequired,
  }).isRequired,
  fetchFolders: PropTypes.func.isRequired,
};

export default UpdateFolderForm;

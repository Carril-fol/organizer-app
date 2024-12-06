import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { Pencil, Check, X, Folder } from "lucide-react";

const UpdateFolderForm = ({ folder, onUpdate }) => {
  const [name_folder, setName_folder] = useState(folder.name_folder || "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setName_folder(folder.name_folder);
  }, [folder]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onUpdate) {
      await onUpdate(folder._id, name_folder);
      onClose();
    }
  };

  return (
    <>
      <Button
        className="bg-transparent max-w-fit max-h-fit flex items-center justify-center"
        onClick={onOpen}>
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
            <form onSubmit={handleSubmit}>
              <Input
                isRequired
                value={name_folder}
                onChange={(e) => setName_folder(e.target.value)}
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
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateFolderForm;

import PropTypes from "prop-types";
import { Plus } from "lucide-react";
import { Input, Button } from "@nextui-org/react";
import useCreateFolderForm from "../../../hooks/folders/useCreateFolderForm";

const CreateFolderForm = ({ onCreate }) => {
  const { name_folder, setName_folder, handleSubmit } = useCreateFolderForm(onCreate);

  return (
    <div className="flex mb-4">
      <form className="flex w-full justify-between" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nueva carpeta"
          className="mr-2 w-3/4"
          value={name_folder}
          onChange={(e) => setName_folder(e.target.value)}
        />
        <Button className="flex items-center bg-black text-white font-semibold" type="submit">
          <span className="flex text-white">
            <Plus className="h-5 w-5" />
            Añadir carpeta
          </span>
        </Button>
      </form>
    </div>
  );
}

CreateFolderForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateFolderForm;

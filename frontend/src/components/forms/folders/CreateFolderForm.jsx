import PropTypes from "prop-types";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { Plus } from "lucide-react";

const FolderForm = ({ onCreate }) => {
  const [name_folder, setName_folder] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreate(name_folder);
    setName_folder("");
  };

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

FolderForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default FolderForm;

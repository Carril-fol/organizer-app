import { Input, Button } from "@nextui-org/react";
import { Folder, Plus } from "lucide-react";

const FolderManager = () => {
  return (
    <div className="w-full md:w-1/3">
      <h2 className="text-lg font-semibold mb-2">Carpetas</h2>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Nueva carpeta"
          className="mr-2"
        />
        <Button className="flex items-center bg-black text-white font-bold">
          <span className="flex text-white justify-center items-center">
            <Plus className="h-4 w-4 mr-2" />
            Añadir
          </span>
        </Button>
      </div>
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Folder className="h-4 w-4 mr-2">
            nombre
          </Folder>
        </Button>
      </div>
    </div>
  );
}
export default FolderManager;
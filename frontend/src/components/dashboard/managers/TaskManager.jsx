import { Button, Input, Textarea } from "@nextui-org/react";
import { Plus } from "lucide-react";

const TaskManager = () => (
  <div className="w-full md:w-2/3">
    <h2 className="text-lg font-semibold mb-2">Tareas</h2>
    <div className="space-y-2 mb-4">
      <Input
        type="text"
        placeholder="Nombre de la tarea"
        variant="bordered"
      />
      <Textarea
        placeholder="Descripción de la tarea (opcional)"
        variant="bordered"
      />
      <Button className="w-full flex items-center bg-black text-white font-bold">
        <span className="flex text-white justify-center items-center">
          <Plus className="h-4 w-4 mr-2" />
          Añadir
        </span>
      </Button>
    </div>
  </div>
);
export default TaskManager;
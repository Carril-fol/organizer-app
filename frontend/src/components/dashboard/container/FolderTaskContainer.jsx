import { Card, CardHeader, CardBody } from "@nextui-org/react";

import FolderManager from "../managers/FolderManager";
import TaskManager from "../managers/TaskManager";

const FolderTaskContainer = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex justify-center">
        <h1 className="text-2xl font-bold text-center">Gestor de Carpetas y Tareas</h1>
      </CardHeader>
      <CardBody>
        <div className="flex space-x-11 justify-evenly">
          <FolderManager />
          <TaskManager />
        </div>
      </CardBody>
    </Card>
  );
}
export default FolderTaskContainer;
import { Folder, CheckSquare, Zap, Shield } from 'lucide-react';
import FeatureCard from "./FeatureCard";

const ContainerFeatureCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      <FeatureCard
        icon={<Folder className="h-12 w-12 text-blue-500" />}
        title="Carpetas personalizadas"
        description="Organiza tus tareas en carpetas temáticas para una mejor gestión"
      />
      <FeatureCard
        icon={<CheckSquare className="h-12 w-12 text-green-500" />}
        title="Gestión de tareas"
        description="Crea, edita y marca tus tareas como completadas fácilmente"
      />
      <FeatureCard
        icon={<Zap className="h-12 w-12 text-yellow-500" />}
        title="Rápido y eficiente"
        description="Interfaz intuitiva para una organización sin esfuerzo"
      />
      <FeatureCard
        icon={<Shield className="h-12 w-12 text-red-500" />}
        title="Seguro y privado"
        description="Tus datos están protegidos y son solo tuyos"
      />
    </div>
  );
}

export default ContainerFeatureCards;
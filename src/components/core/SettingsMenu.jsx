import { Link } from "@nextui-org/react";
import { User, LockKeyhole, Bolt, LogOut } from "lucide-react";

const SettingsMenu = () => {
  return (
    <section className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="border border-gray-300 rounded-lg shadow-md w-2/5 h-80 flex flex-col">
        <div className="flex items-center space-x-2 p-4 border-b border-gray-200">
          <Bolt size={20} />
          <h2 className="text-lg font-semibold text-gray-700">Configuración</h2>
        </div>
        <div className="flex justify-center items-center flex-grow ">
          <div className="flex flex-col space-y-4">
            <Link
              href="settings/personal-data"
              className="text-lg flex items-center space-x-3 text-gray-950">
              <User size={24} />
              <span>Datos personales</span>
            </Link>
            <Link
              href="settings/security"
              className="text-lg flex items-center space-x-3 text-gray-950">
              <LockKeyhole size={24} />
              <span>Seguridad</span>
            </Link>
            <Link
              href="/security"
              className="text-lg flex items-center space-x-3 text-gray-950">
              <LogOut size={24} />
              <span>Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SettingsMenu;
import { LogOut, MenuIcon, Settings } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Link } from "@nextui-org/react";

import LogoInBlack from "./LogoInBlack";
import { useLogout } from "../../hooks/auth/useLogout";

const LoggedNavbar = () => {
  const { handleLogout } = useLogout();

  return (
    <header className="mt-2 flex w-screen justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <a href="/dashboard" className="cursor-pointer flex items-center">
          <LogoInBlack height={40} width={40} />
          <p className="font-bold text-inherit ml-2">Moose Planner</p>
        </a>
      </div>
      <div className="max-w-fit">
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-transparent">
              <MenuIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="settings">
              <Link href="/settings" className="flex items-center text-gray-800">
                <div className="flex items-center font-semibold text-medium">
                  <Settings className="mr-2" />
                  Configuración
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              <div className="flex items-center font-semibold text-medium">
                <LogOut className="mr-2" />
                Cerrar sesión
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header >
  );
};

export default LoggedNavbar;

import { LogOut, MenuIcon } from "lucide-react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import LogoInBlack from "./LogoInBlack";
import useLogout from "../../hooks/auth/useLogout";

const LoggedNavbar = () => {
  const { handleLogout } = useLogout();

  return (
    <header className="mt-2 flex w-screen justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <LogoInBlack height={40} width={40} />
        <p className="font-bold text-inherit">Moose Planner</p>
      </div>
      <div className="max-w-fit">
        <Dropdown>
          <DropdownTrigger>
            <Button className="bg-transparent">
              <MenuIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="logout" className="text-danger" color="danger">
              <Button onClick={handleLogout} className="flex items-center font-bold text-gray-800 transition-colors bg-transparent justify-center">
                <LogOut className="mr-1" />
                Cerrar sesión
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default LoggedNavbar;

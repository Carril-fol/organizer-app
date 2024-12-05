import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { LogOut, UserRoundCog, MenuIcon } from 'lucide-react';

import LogoInBlack from "./LogoInBlack";
import { logout } from "../../services/authServices";

const LoggedNavbar = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await logout();
    navigate("/auth/login");
  };

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
            <DropdownItem key="delete" className="text-danger" color="danger">
              <Button onClick={handleSubmit} className="flex items-center font-bold text-gray-800 transition-colors bg-transparent">
                <LogOut className="mr-1" />
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default LoggedNavbar;

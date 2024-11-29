import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@nextui-org/react";
import {
  LogOut,
  UserRoundCog,
  MenuIcon
} from 'lucide-react';

import LogoInBlack from "./LogoInBlack";
import { logout } from "../../services/authServices";

const LoggedNavbar = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await logout();
    navigate("/auth/login")
  }

  return (
    <Navbar>
      <NavbarBrand>
        <LogoInBlack height={40} width={40} />
        <p className="font-bold text-inherit">Moose Planner</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                <MenuIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="setting" className="flex items-center text-black">
                <span className="flex">
                  <UserRoundCog className="mr-1" />
                  Settings
                </span>
              </DropdownItem>
              <DropdownItem className="flex items-center text-black" color="danger">
                <button onClick={handleSubmit} className="flex items-center font-bold">
                  <LogOut className="mr-1" />
                  Logout
                </button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default LoggedNavbar;
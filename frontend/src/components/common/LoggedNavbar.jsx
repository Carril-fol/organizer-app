import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Divider
} from "@nextui-org/react";

import { LogOut, UserRoundCog, MenuIcon, Menu } from 'lucide-react';
import Logo from "./Logo";

const LoggedNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo height={80} width={80} />
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
                <span className="flex items-center font-bold">
                  <LogOut className="mr-1" />
                  Logout
                </span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default LoggedNavbar;
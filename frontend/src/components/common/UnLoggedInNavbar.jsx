import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import Logo from "./Logo";

const UnLoggedInNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo height={80} width={80} />
        <p className="font-bold text-inherit">Moose Planner</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="auth/login">
            <Button className="bg-gray-700 hover:bg-white hover:border-2 hover:border-gray-700 hover:text-gray-700 text-white font-bold py-2 px-4 transition-all duration-300 ease-in-out">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="auth/register">
            <Button className="bg-white hover:bg-gray-700 border-2 border-gray-700 hover:text-white text-gray-700 font-bold py-2 px-4 transition-all duration-300 ease-in-out">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default UnLoggedInNavbar;

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
            <Button color="primary" variant="ghost" className="font-semibold">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="auth/register">
            <Button color="secondary" variant="ghost" className="font-semibold">
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default UnLoggedInNavbar;

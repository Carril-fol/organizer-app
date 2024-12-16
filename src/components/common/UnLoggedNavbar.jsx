import { Navbar, NavbarBrand } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import LogoInBlack from "./LogoInBlack";

const UnLoggedNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link to="/" className="flex mt-5 items-center gap-2">
          <LogoInBlack height={40} width={40} />
          <p className="font-bold text-black">Moose Planner</p>
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};

export default UnLoggedNavbar;

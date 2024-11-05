import { Button } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-white">Moose Planner</h1>
        </div>
        <Button className="text-black font-semibold bg-white">
          Iniciar sesión
        </Button>
      </nav>
    </header>
  );
}
export default Header;
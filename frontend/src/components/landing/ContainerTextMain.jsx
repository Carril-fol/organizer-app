import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Logo from "../common/LogoInWhite";

const ContainerTextMain = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <Logo
          width={80}
          height={80}
        />
        <h2 className="text-4xl font-bold mb-4 text-white">Organiza tu vida con MoosePlanner</h2>
      </div>
      <p className="text-xl text-gray-200 mb-8">
        Simplifica tu día a día con carpetas y tareas personalizadas
      </p>
      <Link to="auth/login">
        <Button size="lg" className="text-lg px-8 bg-white font-semibold">
          Comienza gratis
        </Button>
      </Link>
    </div>
  );
}

export default ContainerTextMain;
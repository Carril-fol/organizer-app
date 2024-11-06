import { useState } from "react";
import { Button, Input, Link, Checkbox } from "@nextui-org/react";
import LogoInBlack from "../../common/LogoInBlack";

const LoginForm = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <form method="POST" className="min-w-fit px-5 py-5 rounded-xl translate-y-full animate-move-up transition-all duration-100 ease-out">
      <div className="flex max-w-full justify-center">
        <div className="min-w-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <LogoInBlack width={90} height={90} alt="Logo" />
          </div>
        </div>
        <div className="min-w-80">
          <div className="mx-5">
            <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
            <p className="text-sm text-gray-600">Por favor, ingresa tus credenciales para acceder a tu cuenta.</p>
            <div className="py-2">
              <Input label="Email" type="text" variant="underlined" className="mb-1" required />
            </div>
            <div className="py-2">
              <Input label="Password" type="password" variant="underlined" className="mb-1" required />
              <Link className="text-sm text-blue-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className="flex items-center my-3">
              <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                Recordar mi sesión
              </Checkbox>
            </div>
            <div className="py-4 flex flex-col justify-center">
              <Button size="md" color="default" className="bg-black text-white font-semibold">
                Iniciar Sesión
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ¿No tienes una cuenta? <Link className="text-blue-500 hover:underline">Regístrate aquí</Link>.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
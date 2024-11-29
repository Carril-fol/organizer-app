import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Link } from "@nextui-org/react";
import LogoInBlack from "../../common/LogoInBlack";

import { login } from "../../../services/authServices";


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (error) {
      setError("Credenciales invalidas");
    }
  };

  return (
    <form
      method="POST"
      className="min-w-fit px-5 py-5 rounded-xl translate-y-full animate-move-up transition-all duration-100 ease-out"
      onSubmit={handleSubmit}
    >
      <div className="flex max-w-full justify-center">
        <div className="min-w-80 flex justify-center">
          <div className="flex flex-col justify-center">
            <LogoInBlack width={90} height={90} alt="Logo" />
          </div>
        </div>
        <div className="min-w-80">
          <div className="mx-5">
            <h2 className="text-2xl font-bold">Iniciar Sesión</h2>
            <p className="text-sm text-gray-600">
              Por favor, ingresa tus credenciales para acceder a tu cuenta.
            </p>
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded my-2">
                {error}
              </div>
            )}
            <div className="py-2">
              <Input
                label="Email"
                type="text"
                variant="underlined"
                className="mb-1"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Password"
                type="password"
                variant="underlined"
                className="mb-1"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link className="text-sm text-blue-500 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className="py-4 flex flex-col justify-center">
              <Button
                size="md"
                color="default"
                className="bg-black text-white font-semibold"
                type="submit"
              >
                Iniciar Sesión
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ¿No tienes una cuenta?{' '}
              <a href="register" className="text-blue-500 hover:underline">
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import LogoInBlack from "../../common/LogoInBlack";

import { register } from "../../../services/authServices";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register({ first_name, last_name, email, password, confirm_password });
      navigate("/dashboard");
    } catch (error) {
      setError("Ocurrio un error al momento de la creacion");
    }
  }

  return (
    <form method="POST" className="min-w-fit px-5 py-5 rounded-xl translate-y-full animate-move-up transition-all duration-100 ease-out" onSubmit={handleSubmit}>
      <div className="flex max-w-full justify-center">
        <div className="min-w-80 flex justify-center items-center flex-col px-5">
          <div className="flex flex-col items-center">
            <LogoInBlack width={60} height={60} alt="Logo" />
            <h2 className="text-2xl font-bold mt-4 text-center">Bienvenido a MoosePlanner</h2>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Planifica tu día con facilidad. Crea tu cuenta para comenzar.
            </p>
          </div>
        </div>
        <div className="min-w-80">
          <div className="mx-5">
            <div className="py-2">
              <Input
                label="Nombre"
                type="text"
                variant="underlined"
                className="mb-1"
                isRequired
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Apellido"
                type="text"
                variant="underlined"
                className="mb-1"
                isRequired
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Email"
                type="text"
                variant="underlined"
                className="mb-1"
                isRequired
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Contraseña"
                type="password"
                variant="underlined"
                className="mb-1"
                isRequired
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-2">
              <Input
                label="Confirmar contraseña"
                type="password"
                variant="underlined"
                className="mb-1"
                isRequired
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="py-4 flex flex-col justify-center">
              <Button size="md" color="default" className="bg-black text-white font-semibold" type="submit">
                Registrarse
              </Button>
            </div>
            <p>¿Tiene una cuenta ya registrada? <a href="login" className="text-blue-500 hover:underline">Inicia sesión</a></p>
          </div>
        </div>
      </div>
    </form>
  );
}
export default RegisterForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authServices";

const useRegisterForm = () => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError('');
    if (password !== confirm_password) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register({ first_name, last_name, email, password, confirm_password });
      navigate("/dashboard");
    } catch (err) {
      setError("Ocurrió un error al momento de la creación");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return {
    first_name,
    setFirstName,
    last_name,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirm_password,
    setConfirmPassword,
    error,
    handleSubmit,
  };
};

export { useRegisterForm };

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authServices";

const useLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError("");
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciales inválidas");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};

export default useLoginForm;

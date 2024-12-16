import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authServices";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/auth/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return { handleLogout };
};

export default useLogout;

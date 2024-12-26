import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { detailFromUserRequested, updateDataFromUser } from "../../services/authServices";

const usePersonalDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await detailFromUserRequested();
      setFirstName(data.user.first_name || "");
      setLastName(data.user.last_name || "");
      setEmail(data.user.email || "");
    } catch (err) {
      setError("Error fetching user details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedFields = {
        ...(firstName && { "first_name": firstName  }),
        ...(lastName && { "last_name": lastName }),
        ...(isEmailEnabled && email && { email }),
      };

      if (Object.keys(updatedFields).length === 0) {
        return;
      }

      const res = await updateDataFromUser(updatedFields);
      toast.success("Datos actualizados correctamente");
    } catch (err) {
      toast.error("Error actualizando los datos del usuario");
    } finally {
      setLoading(false);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    isEmailEnabled,
    setIsEmailEnabled,
    loading,
    error,
    handleSubmit
  };
};

export default usePersonalDataForm;

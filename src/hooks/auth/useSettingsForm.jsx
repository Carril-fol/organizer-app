import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { detailFromUserRequested, updateDataFromUser } from "../../services/authServices";

const useSettingsForm = () => {
  const [personalData, setPersonalData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [updatedFields, setUpdatedFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isPasswordEnabled, setIsPassowordEnabled] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await detailFromUserRequested();
      setPersonalData({
        first_name: response.user.first_name || "",
        last_name: response.user.last_name || "",
        email: response.user.email || "",
      });
    } catch (err) {
      setError("Error fetching user details");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setPersonalData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(updatedFields).length === 0) {
      toast.info("No hay cambios para guardar");
      return;
    }

    setLoading(true);
    try {
      await updateDataFromUser(updatedFields);
      toast.success("Datos actualizados correctamente");
      setUpdatedFields({});
    } catch (err) {
      toast.error("Error actualizando los datos del usuario");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return {
    personalData,
    loading,
    error,
    isEmailEnabled,
    setIsEmailEnabled,
    handleChange,
    handleSubmit,
  };
};

export default useSettingsForm;
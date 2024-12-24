import { useState, useEffect } from "react";
import { detailFromUserRequested } from "../../services/authServices";

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

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     await updateUserDetails({ firstName, lastName, email: isEmailEnabled ? email : undefined });
  //     alert("Datos guardados correctamente");
  //   } catch (err) {
  //     setError("Error updating user details");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
    // handleSubmit,
  };
};

export default usePersonalDataForm;

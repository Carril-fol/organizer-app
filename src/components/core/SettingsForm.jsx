import React, { Suspense } from "react";
import { Button } from "@nextui-org/react";
import useSettingsForm from "../../hooks/auth/useSettingsForm";

const PersonalDataForm = React.lazy(() => import("./PersonalDataForm"));
const SecurityDataForm = React.lazy(() => import("./SecurityDataForm"));

const SettingsForm = () => {
  const {
    personalData,
    isEmailEnabled,
    setIsEmailEnabled,
    error,
    loading,
    handleChange,
    handleSubmit
  } = useSettingsForm();

  return (
    <form onSubmit={handleSubmit} className="mx-auto p-6 bg-gray-50 w-3/5">
      <Suspense fallback={<div></div>}>
        <PersonalDataForm
          data={personalData}
          onChange={handleChange}
          isEmailEnabled={isEmailEnabled}
          setIsEmailEnabled={setIsEmailEnabled}
        />
      </Suspense>
      <Button
        type="submit"
        className="w-full bg-black text-white font-semibold mt-10"
      >
        Guardar
      </Button>
    </form>
  );
};

export default SettingsForm;

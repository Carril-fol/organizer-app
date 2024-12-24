import React from "react";

import { ring } from "ldrs";
import { User } from "lucide-react";
import { Input, Checkbox, Button } from "@nextui-org/react";
import usePersonalDataForm from "../../hooks/auth/usePersonalDataForm";

ring.register();

const PersonalDataForm = () => {
  const {
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
    handleSubmit,
  } = usePersonalDataForm();

  return (
    <form onSubmit={handleSubmit} className="w-2/5 mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-3 border-b-2 border-black">
        <User size={24} />
        <h2 className="text-lg font-semibold text-black">Datos personales</h2>
      </div>
      <div className="mt-5 space-y-9 mb-10">
        {error && <p className="text-red-500">{error}</p>}
        <div className="space-y-2">
          <Input
            variant="underlined"
            label="Nombre"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Input
            variant="underlined"
            label="Apellido"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Input
            variant="underlined"
            type="email"
            label="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEmailEnabled}
            required={isEmailEnabled}
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="checkboxEmail"
              isSelected={isEmailEnabled}
              onValueChange={setIsEmailEnabled}
            >
              <input
                type="checkbox"
                id="checkboxEmail"
                className="hidden"
                checked={isEmailEnabled}
                onChange={(e) => setIsEmailEnabled(e.target.checked)}
              />
            </Checkbox>
            <label htmlFor="checkboxEmail">Habilitar edición de correo electrónico</label>
          </div>
        </div>
      </div>
      <Button className="w-full bg-black text-white font-semibold" disabled={loading}>
        {loading ? (
          <div className="flex items-center justify-center">
            <l-ring size="25" speed="1.75" color="white"></l-ring>
          </div>
        ) : (
          "Guardar"
        )}
      </Button>
    </form >
  );
};

export default PersonalDataForm;

import React from "react";
import { ring } from "ldrs";
import { User } from "lucide-react";
import { Input, Checkbox } from "@nextui-org/react";

ring.register();

const PersonalDataForm = ({ data, onChange, isEmailEnabled, setIsEmailEnabled }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 border-b-2 border-black">
        <User size={24} />
        <h2 className="text-lg font-semibold text-black">Datos personales</h2>
      </div>
      <div className="mt-5 space-y-9 mb-10">
        <div className="space-y-2">
          <Input
            variant="underlined"
            label="Nombre"
            type="text"
            value={data.first_name}
            onChange={(e) => onChange("first_name", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Input
            variant="underlined"
            label="Apellido"
            type="text"
            value={data.last_name}
            onChange={(e) => onChange("last_name", e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Input
            variant="underlined"
            type="email"
            label="Correo Electrónico"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            isDisabled={!isEmailEnabled}
            isRequired={isEmailEnabled}
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
    </div>
  );
};

export default PersonalDataForm;

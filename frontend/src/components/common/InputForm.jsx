import { Input } from "@nextui-org/react";

const InputForm = ({ label, type }) => {
    return (
        <Input label={label} type={type} variant="underlined" />
    );
}
export default InputForm;
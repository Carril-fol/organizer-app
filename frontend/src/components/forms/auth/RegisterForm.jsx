import { Button } from "@nextui-org/react";
import InputForm from "../../common/InputForm";
import Logo from "../../common/Logo";

const RegisterForm = () => {
  return (
    <form method="post" className="w-1/5 rounded-xl shadow-xl translate-y-full animate-move-up transition-all duration-1000 ease-out">
      <div className="py-3 flex-row px-5 justify-center items-center">
        <div>
          <div className="flex flex-col justify-center items-center">
            <Logo width={80} height={80} alt="Logo" />
            <h2 className="font-semibold text-xl py-3">
              Create a Moose Planner account
            </h2>
          </div>
        </div>
        <div className="py-2">
          <InputForm label="First name" type="text" />
        </div>
        <div className="py-2">
          <InputForm label="Last name" type="text" />
        </div>
        <div className="py-2">
          <InputForm label="Email" type="text" />
        </div>
        <div className="py-2">
          <InputForm label="Password" type="password" />
        </div>
        <div className="py-2">
          <InputForm label="Confirm password" type="password" />
        </div>
        <div className="py-4 flex justify-center">
          <Button size="md" color="default" variant="ghost" className="font-bold">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}
export default RegisterForm;
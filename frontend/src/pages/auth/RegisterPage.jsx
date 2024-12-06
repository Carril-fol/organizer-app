import RegisterForm from "../../components/forms/auth/RegisterForm";
import UnLoggedNavbar from "../../components/common/UnLoggedNavbar";

const RegisterPage = () => {
  return (
    <div>
      <main className="min-h-screen">
        <UnLoggedNavbar />
        <section className="flex justify-center items-center min-h-screen">
          <RegisterForm />
        </section>
      </main>
    </div>
  );
}
export default RegisterPage;
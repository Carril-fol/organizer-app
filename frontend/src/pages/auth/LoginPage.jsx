import LoginForm from "../../components/forms/auth/LoginForm";
import UnLoggedNavbar from "../../components/common/UnLoggedNavbar";

const LoginPage = () => {
  return (
    <div>
      <UnLoggedNavbar />
      <main className="min-h-screen">
        <section className="flex justify-center items-center min-h-screen">
          <LoginForm />
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
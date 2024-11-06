import LoginForm from "../../components/forms/auth/LoginForm";
import Header from "../../components/common/Header";

const LoginPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex justify-center items-center min-h-screen">
        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
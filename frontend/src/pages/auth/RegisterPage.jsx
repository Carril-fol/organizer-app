import RegisterForm from "../../components/forms/auth/RegisterForm";
import Header from "../../components/common/Header";

const RegisterPage = () => {
    return (
        <main className="min-h-screen">
            <Header />
            <section className="flex justify-center items-center min-h-screen">
                <RegisterForm />
            </section>
        </main>
    );
}
export default RegisterPage;
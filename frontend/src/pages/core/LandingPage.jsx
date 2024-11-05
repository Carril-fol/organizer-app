import Header from "../../components/landing/Header";
import Footer from "../../components/common/Footer";
import ContainerFeatureCards from "../../components/landing/ContainerFeatureCards";
import ContainerTextMain from "../../components/landing/ContainerTextMain";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <ContainerTextMain />
        <ContainerFeatureCards />
        <Footer />
      </main>
    </div>
  );
}
export default LandingPage;
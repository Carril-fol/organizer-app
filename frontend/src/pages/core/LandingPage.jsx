import Footer from "../../components/common/Footer";
import ContainerFeatureCards from "../../components/landing/ContainerFeatureCards";
import ContainerTextMain from "../../components/landing/ContainerTextMain";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-16 text-center">
          <ContainerTextMain />
          <ContainerFeatureCards />
          <Footer />
        </div>
      </div>
    </main>
  );
}
export default LandingPage;
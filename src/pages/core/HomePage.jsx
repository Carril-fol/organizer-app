import LoggedNavbar from "../../components/common/LoggedNavbar";
import Dashboard from "../../components/dashboard/Dashboard";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <LoggedNavbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default HomePage;
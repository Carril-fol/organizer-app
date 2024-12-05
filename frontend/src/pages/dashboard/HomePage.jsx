import LoggedNavbar from "../../components/common/LoggedNavbar";
import FolderTaskContainer from "../../components/dashboard/container/FolderTaskContainer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <LoggedNavbar />
      <main>
        <FolderTaskContainer />
      </main>
    </div>
  );
};

export default HomePage;
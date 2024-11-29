import LoggedHeader from "../../components/common/LoggedHeader";
import FolderTaskContainer from "../../components/dashboard/container/FolderTaskContainer";

const HomePage = () => {
  return (
    <main>
      <LoggedHeader />
      <section className="w-screen h-screen flex justify-center items-center">
        <div className="w-3/5">
          <FolderTaskContainer />
        </div>
      </section>
    </main>
  );
}
export default HomePage;
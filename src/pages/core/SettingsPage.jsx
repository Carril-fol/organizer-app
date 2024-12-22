import LoggedNavbar from "../../components/common/LoggedNavbar";
import SettingsMenu from "../../components/core/SettingsMenu";

const SettingsPage = () => {
  return (
    <div className="flex flex-col">
      <LoggedNavbar />
      <main className="bg-gray-50">
        <section>
          <SettingsMenu />
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;
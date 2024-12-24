import React, { Suspense } from "react";

const LoggedNavbar = React.lazy(() => import("../../components/common/LoggedNavbar"));
const SettingsMenu = React.lazy(() => import("../../components/core/SettingsMenu"));

const SettingsPage = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<div>Cargando...</div>}>
        <LoggedNavbar />
      </Suspense>
      <main className="bg-gray-50">
        <section>
          <Suspense fallback={<div>Cargando...</div>}>
            <SettingsMenu />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;
import React, { Suspense } from "react";

const LoggedNavbar = React.lazy(() => import("../../components/common/LoggedNavbar"));
const SettingsForm = React.lazy(() => import("../../components/core/SettingsForm"));

const SettingsPage = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<div></div>}>
        <LoggedNavbar />
      </Suspense>
      <main className="bg-gray-50">
        <section className="min-w-screen min-h-screen flex justify-center items-center">
          <Suspense fallback={<div></div>}>
            <SettingsForm />
          </Suspense>
        </section>
      </main>
    </div>
  );
}

export default SettingsPage;
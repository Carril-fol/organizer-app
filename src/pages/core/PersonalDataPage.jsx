import React, { Suspense } from "react";

const LoggedNavbar = React.lazy(() => import("../../components/common/LoggedNavbar"));
const PersonalDataForm = React.lazy(() => import("../../components/core/PersonalDataForm"));

const PersonalDataPage = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<div>Cargando...</div>}>
        <LoggedNavbar />
      </Suspense>
      <main className="bg-gray-50">
        <section className="flex justify-center items-center min-w-screen min-h-screen">
          <Suspense fallback={<div>Cargando...</div>}>
            <PersonalDataForm />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default PersonalDataPage;
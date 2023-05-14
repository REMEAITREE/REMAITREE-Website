// Packages
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <header className="w-full">
        <h1 className="text-3xl font-bold text-center p-3 md:text-4xl lg:p-5">
          Rem<span className="text-secondary px-1">AI</span>Tree
        </h1>
      </header>

      <main className="grid place-items-center w-full h-full mt-16">
        <Outlet />
      </main>
    </>
  );
}

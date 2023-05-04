// Packages
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Route components
import HomeRoutes from "./pages/home/HomeRoutes";
const AuthRoutes = lazy(() => import("./pages/auth/AuthRoutes"));

// Components
import Loader from "./components/Loader";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <HomeRoutes />
        <AuthRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

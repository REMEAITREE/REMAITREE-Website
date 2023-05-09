// Packages
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Route components
import HomeRoutes from "./pages/home/HomeRoutes";
const AuthRoutes = lazy(() => import("./pages/auth/AuthRoutes"));

// Components
import Loader from "./components/Loader";
// import DesignRoutes from "./pages/Design/DesignRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <HomeRoutes />
        <AuthRoutes />
        {/* <DesignRoutes/> */}
        {/* adasad */}
      </Suspense>
    </BrowserRouter>
  );
}

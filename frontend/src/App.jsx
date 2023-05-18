// Packages
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Route components
import HomeRoutes from "./pages/home/HomeRoutes";
const AuthRoutes = lazy(() => import("./pages/auth/AuthRoutes"));
const DashboardRoutes = lazy(() => import("./pages/dashboard/DashboardRoutes"));
const ReportsRoutes = lazy(() => import("./pages/reports/ReportsRoutes"))
const DesignRoutes =lazy(()=>import("./pages/Design/DesignRoutes"));
// Components
import Loader from "./components/Loader";

// Context Providers
import { UserContextProvider } from "./contexts/UserContext";


export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <UserContextProvider>
          <HomeRoutes />
          <AuthRoutes />
          <DashboardRoutes />
          <ReportsRoutes />
          <DesignRoutes/>
        </UserContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

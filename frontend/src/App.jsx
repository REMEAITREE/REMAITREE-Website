// Packages
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
// Route components
import HomeRoutes from "./pages/home/HomeRoutes";
const AuthRoutes = lazy(() => import("./pages/auth/AuthRoutes"));
const DashboardRoutes = lazy(() => import("./pages/dashboard/DashboardRoutes"));
const ReportsRoutes = lazy(() => import("./pages/reports/ReportsRoutes"));
const DesignRoutes = lazy(() => import("./pages/Design/DesignRoutes"));
const PaymentRoutes = lazy(() => import("./pages/Payment/PaymentRoutes"));
const SlotRoutes = lazy(() => import("./pages/Slot/SlotRoutes"));
const ProfileRoutes = lazy(() => import("./pages/profilepage/ProfileRoutes"));
const ModelRoutes = lazy(() => import("./pages/modelpage/ModelRoutes"));
const AboutRoutes = lazy(() => import("./pages/aboutus/AboutRoutes"));
const DocPageRoutes = lazy(() => import("./pages/finddoctor/DoctorPgRoutes"));

// Components
import Loader from "./components/Loader";

// Context Providers
import { UserContextProvider } from "./contexts/UserContext";
import SuccessPgRoutes from "./pages/Payment/SuccessPg/SuccessPgRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <UserContextProvider>
          <HomeRoutes />
          <AuthRoutes />
          <DashboardRoutes />
          <ReportsRoutes />
          <DesignRoutes />
          <ModelRoutes />
          <AboutRoutes />
          <ProfileRoutes />
          <PaymentRoutes />
          <SlotRoutes />
          <DocPageRoutes />
          <SuccessPgRoutes />
        </UserContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

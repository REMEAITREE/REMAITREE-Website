// Packages
import { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Payment from '../../frontend/src/pages/Payment/Payment'
// Route components
import HomeRoutes from "./pages/home/HomeRoutes";
const AuthRoutes = lazy(() => import("./pages/auth/AuthRoutes"));
const DashboardRoutes = lazy(() => import("./pages/dashboard/DashboardRoutes"));
const ReportsRoutes = lazy(() => import("./pages/reports/ReportsRoutes"))
const DesignRoutes = lazy(() => import("./pages/Design/DesignRoutes"));
const PaymentRoutes=lazy(()=>import("./pages/Payment/PaymentRoutes"))
const SlotRoutes=lazy(()=>import("./pages/Slot/SlotRoutes"))
const ProfileRoutes = lazy(() => import("./pages/profilepage/ProfileRoutes"));
const ModelRoutes= lazy(() => import("./pages/modelpage/ModelRoutes"));
const AboutRoutes= lazy(() => import("./pages/aboutus/AboutRoutes"));
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
          <DesignRoutes />
          <ModelRoutes/>
          <AboutRoutes/>
          <ProfileRoutes/>
          <PaymentRoutes/>
          <SlotRoutes/>
        </UserContextProvider>
      </Suspense>
    </BrowserRouter>
  );
}

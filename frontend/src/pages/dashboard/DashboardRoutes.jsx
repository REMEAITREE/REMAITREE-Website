// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import Dashboard from "./Dashboard";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

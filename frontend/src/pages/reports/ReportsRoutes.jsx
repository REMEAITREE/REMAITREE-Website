// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import ReportsPage from "./ReportsPage";

export default function ReportsRoutes() {
  return (
    <Routes>
      <Route path="/reports" element={<ReportsPage />} />
    </Routes>
  );
}

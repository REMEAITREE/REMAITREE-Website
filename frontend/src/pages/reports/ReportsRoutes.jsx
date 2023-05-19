// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import ReportsPage from "./ReportsPage";
import PDFReportViewer from "./PDFReportViewer";
// import GenerateAppointmentReport from "./appointment_generated_report/GenerateAppointmentReport";

export default function ReportsRoutes() {
  return (
    <Routes>
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/reports/view" element={<PDFReportViewer />} />
      {/* <Route path="/reports/generate" element={<GenerateAppointmentReport />} /> */}
    </Routes>
  );
}

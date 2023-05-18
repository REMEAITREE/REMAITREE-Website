// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import DocPage from "./DocPage";

export default function  DoctorPgRoutes() {
  return (
    <Routes>
      <Route path="/find-the-doc" element={<DocPage />} />
    </Routes>
  );
}

// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import Model from "./model";

export default function  ModelRoutes() {
  return (
    <Routes>
      <Route path="/services" element={<Model/>} />
    </Routes>
  );
}

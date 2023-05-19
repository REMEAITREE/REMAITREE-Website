// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import About from "./About";

export default function AboutRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
    </Routes>
  );
}

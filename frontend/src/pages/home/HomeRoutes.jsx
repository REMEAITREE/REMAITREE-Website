// Packages
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./Home";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

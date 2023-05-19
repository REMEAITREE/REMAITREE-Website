// Packages
import { Routes, Route } from "react-router-dom";

// Page components
import Profile from "./Profile"

export default function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}

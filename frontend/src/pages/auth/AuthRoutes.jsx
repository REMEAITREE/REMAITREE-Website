// Packages
import { Route, Routes } from "react-router-dom";

// Pages
import Auth from "./Auth";

// Page components
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import OTPVerification from "./OTPVerification/OTPVerification";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="otp" element={<OTPVerification />} />
      </Route>
    </Routes>
  );
}

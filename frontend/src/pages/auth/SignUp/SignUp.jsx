// Packages
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { auth } from "../../../firebase/firebase";

// Page components
import FormSelector from "./FormSelector";
import DoctorForm from "./DoctorForm/DoctorSignUp";
import PatientForm from "./PatientForm/PatientSignUp";

export default function SignUp() {
  const [showFormSelector, setShowFormSelector] = useState(true);
  const [isPatientForm, setIsPatientForm] = useState(false);

  return auth.currentUser ? (
    <Navigate to="/dashboard" replace />
  ) : showFormSelector ? (
    <FormSelector
      setIsPatientForm={setIsPatientForm}
      setShowFormSelector={setShowFormSelector}
    />
  ) : isPatientForm ? (
    <PatientForm />
  ) : (
    <DoctorForm />
  );
}

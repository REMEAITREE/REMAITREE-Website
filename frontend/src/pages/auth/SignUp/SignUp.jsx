// Packages
import { useState } from "react";

// Page components
import FormSelector from "./FormSelector";
import DoctorForm from "./DoctorForm/DoctorSignUp";
import PatientForm from "./PatientForm/PatientSignUp";

export default function SignUp() {
  const [showFormSelector, setShowFormSelector] = useState(true);
  const [isPatientForm, setIsPatientForm] = useState(false);

  return showFormSelector ? (
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

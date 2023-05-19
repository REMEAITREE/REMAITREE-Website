// Packages
import { Navigate } from "react-router-dom";

// Page components
import PatientProfile from "./patient_profile/PatientProfile";
import DoctorProfile from "./doctor_profile/DoctorProfile";

// Requests
import { isUserPatient } from "../../api/FirestoreUserRequests";

// Hooks
import useUserContext from "../../hooks/useUserContext";


export default function Profile() {
  const { currentUser } = useUserContext();

  return currentUser ? (
    isUserPatient() ? (
      <PatientProfile />
    ) : (
      <DoctorProfile />
    )
  ) : (
    <>No user</>
  );
}

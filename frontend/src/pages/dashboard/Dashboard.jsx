// Packages
import { Navigate } from "react-router-dom";

// Page components
import PatientDashboard from "./patient_dashboard/PatientDashboard";
import DoctorDashboard from "./doctor_dashboard/DoctorDashboard";

// Requests
import { isUserPatient } from "../../api/FirestoreUserRequests";

// Hooks
import useUserContext from "../../hooks/useUserContext";

export default function Dashboard() {
  const { currentUser } = useUserContext();

  return currentUser ? (
    isUserPatient() ? (
      <PatientDashboard />
    ) : (
      <DoctorDashboard />
    )
  ) : (
    <>No user</>
  );
}

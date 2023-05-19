// Page components
import PatientReportsPage from "./patient_reports_page/PatientReportsPage";
import DoctorReportsPage from "./doctor_reports_page/DoctorReportsPage";

// Requests
import { isUserPatient } from "../../api/FirestoreUserRequests";

// Hooks
import useUserContext from "../../hooks/useUserContext";

export default function ReportsPage() {
  const { currentUser } = useUserContext();

  return currentUser ? (
    isUserPatient() ? (
      <PatientReportsPage />
    ) : (
      <DoctorReportsPage />
    )
  ) : (
    <>No user</>
  );
}

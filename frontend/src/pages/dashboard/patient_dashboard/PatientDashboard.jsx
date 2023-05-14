export default function PatientDashboard() {
  return (
    <>
      <h1 className="mx-5">Patient dashboard page</h1>
      <button
        className="bg-primary text-white p-10 mx-5"
        onClick={() => (window.location = "/reports")}
      >
        My reports
      </button>
    </>
  );
}

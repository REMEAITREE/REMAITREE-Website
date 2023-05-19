// Page components
import UploadedPdfsSection from "./UploadedPdfsSection/UploadedPdfsSection";
import GeneratedPdfsSection from "./GeneratedPdfsSection/GeneratedPdfsSection";

export default function PatientReportsPage() {
  return (
    <>
      <header className="w-full">
        <h1
          className="text-3xl font-bold text-center p-3 md:text-4xl lg:p-5 cursor-pointer"
          onClick={() => (window.location = "/")}
        >
          Rem<span className="text-secondary px-1">AI</span>Tree
        </h1>
      </header>

      <main className="mt-5 px-3 md:px-7 lg:px-10">
        <h2 className="text-lg md:text-xl lg:text-2xl text-center font-medium">
          My reports
        </h2>

        <UploadedPdfsSection />
        <GeneratedPdfsSection />
      </main>
    </>
  );
}

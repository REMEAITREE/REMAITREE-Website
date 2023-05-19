// Packages
import { useState } from "react";

// Requests
import { uploadReport } from "../../../../api/FirebaseStorageRequests";

// Assets
import DocumentIcon from "../../../../assets/icons/DocumentIcon";
import PDFIcon from "../../../../assets/icons/pdf_icon.png";

export default function UploadForm(props) {
  const { setShowUploadForm } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  //* Handle select file
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //* Handle upload
  const submitHandler = (e) => {
    e.preventDefault();

    if (selectedFile) {
      setShowUploadForm(!uploadReport(selectedFile));
      setSelectedFile(null);
    }
  };

  return (
    <section className="fixed top-0 left-0 bg-white opacity-100 backdrop-blur-3xl w-screen h-screen min-w-full min-h-screen z-50 grid place-items-center">
      <form className="flex flex-col justify-center gap-5">
        {!selectedFile && (
          <label
            htmlFor="uploadPdf"
            className="border-2 border-dashed border-secondary rounded-lg cursor-pointer flex flex-col justify-center items-center gap-7 p-5"
          >
            <DocumentIcon />
            <h5 className="text-xl text-center font-medium">
              Select file to upload
            </h5>
          </label>
        )}
        <input
          type="file"
          accept=".pdf"
          name="uploadPdf"
          onChange={handleFileSelect}
          id="uploadPdf"
          className="hidden"
          required
        />

        {selectedFile && (
          <div className="flex justify-between items-center gap-2">
            <div className="w-16">
              <img className="w-full" src={PDFIcon} alt="PDF" />
            </div>
            <h3 className="w-[25ch]">{selectedFile.name}</h3>
          </div>
        )}

        <div className="flex justify-between items-center gap-3">
          <button
            className="bg-red text-white w-full py-1 px-3 rounded-lg text-lg hover:scale-105 active:scale-100 transition max-w-[150px]"
            onClick={() => setShowUploadForm(false)}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-secondary text-white w-full py-1 px-3 rounded-lg text-lg hover:scale-105 active:scale-100 transition max-w-[150px]"
            onClick={submitHandler}
          >
            Upload
          </button>
        </div>
      </form>
    </section>
  );
}

// Packages
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";

import { storage } from "../../firebase/firebase";

// Assets
import CrossIcon from "../../assets/icons/CrossIcon";

export default function PDFReportViewer() {
  const { fileRef, isGenerated } = useLocation().state;
  const navigate = useNavigate();

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const path =
      "/reports/" + (isGenerated ? "generated/" : "uploaded/") + fileRef;
    const pathRef = ref(storage, path);
    getDownloadURL(pathRef)
      .then((url) => {
        setPdfUrl(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section className="fixed top-0 left-0 bg-primary bg-opacity-50 w-screen h-screen min-h-screen">
      <div className="bg-white bg-opacity-50 py-2 grid place-items-center">
        <div
          className="cursor-pointer hover:scale-110 active:scale-100"
          title="Close"
          onClick={() => navigate("/reports", { replace: true })}
        >
          <CrossIcon />
        </div>
      </div>

      {pdfUrl ? (
        <iframe src={pdfUrl} width="100%" className="h-[90%]"></iframe>
      ) : (
        <div className="text-center py-10 text-white text-xl font-bold">
          Loading pdf...
        </div>
      )}
    </section>
  );
}

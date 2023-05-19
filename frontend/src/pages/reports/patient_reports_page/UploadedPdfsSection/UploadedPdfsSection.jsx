// Packages
import { useState, useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";
import { Carousel } from "@trendyol-js/react-carousel";

// Page components
import UploadForm from "./UploadForm";
import Divider from "./Divider";
import PdfCard from "../../PdfCard";

// Assets
import AddIcon from "../../../../assets/icons/AddIcon";
import LeftArrowIcon from "../../../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../assets/icons/RightArrowIcon";

export default function UploadedPdfsSection() {
  const [showUploadForm, setShowUploadForm] = useState(false);

  const [reports, setReports] = useState([]);

  useEffect(() => {
    //* Fetch all uploaded reports
    try {
      const collectionRef = collection(db, "reports");
      const q = query(
        collectionRef,
        where("uid", "==", auth.currentUser.uid),
        where("isGenerated", "==", false)
      );
      getDocs(q).then((querySnapshot) => {
        const r = [];
        querySnapshot.forEach((doc) => {
          r.push(doc.data());
        });
        setReports(r);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      {showUploadForm && <UploadForm setShowUploadForm={setShowUploadForm} />}

      <section>
        <Divider />

        <div className="flex justify-between items-center">
          <h3 className=" text-lg font-medium">Uploaded reports</h3>

          <div
            className="flex justify-between items-center gap-2 cursor-pointer transition hover:scale-105 active:scale-100"
            onClick={() => setShowUploadForm(true)}
          >
            <AddIcon title="Upload Report" />
            <h4 className="hidden md:block">New Report</h4>
          </div>
        </div>

        <div className="mt-5">
          {reports.length ? (
            <Carousel
              show={2}
              swiping
              responsive
              dynamic
              infinite={false}
              leftArrow={<LeftArrowIcon />}
              rightArrow={<RightArrowIcon />}
            >
              {reports.map((report) => {
                return <PdfCard key={report.uid} {...report} />;
              })}
            </Carousel>
          ) : (
            <div className="text-xl text-center p-3">No reports found!</div>
          )}
        </div>

        <Divider />
      </section>
    </>
  );
}

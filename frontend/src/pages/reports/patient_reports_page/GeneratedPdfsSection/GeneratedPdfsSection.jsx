// Packages
import { useState, useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../../../firebase/firebase";
import { Carousel } from "@trendyol-js/react-carousel";

// Page components
import Divider from "../UploadedPdfsSection/Divider";
import PdfCard from "../../PdfCard";

// Assets
import LeftArrowIcon from "../../../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../../../assets/icons/RightArrowIcon";

export default function GeneratedPdfsSection() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    //* Fetch all generated reports
    try {
      const collectionRef = collection(db, "reports");
      const q = query(
        collectionRef,
        where("uid", "==", auth.currentUser.uid),
        where("isGenerated", "==", true)
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
      <Divider />

      <div className="flex justify-between items-center">
        <h3 className=" text-lg font-medium">AI Generated reports</h3>
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
    </>
  );
}

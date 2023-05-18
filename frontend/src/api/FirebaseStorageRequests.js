// Packages
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";

import { auth, db, storage } from "../firebase/firebase";

//* Uploading user report
const uploadReport = async (file) => {
  try {
    const fileRef = file.name + v4();
    const storageRef = ref(storage, "reports/uploaded/" + fileRef);
    await uploadBytes(storageRef, file);

    // Store the access reference in Firestore
    const reportData = {
      uid: auth.currentUser.uid,
      fileName: file.name,
      fileRef: fileRef,
      isGenerated: false,
      access: [],
    };
    const reportsCollectionRef = collection(db, "reports");
    await addDoc(reportsCollectionRef, reportData);

    console.log("File uploaded and Firestore updated successfully.");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export { uploadReport };
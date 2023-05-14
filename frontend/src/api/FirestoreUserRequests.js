// Packages
import { updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebase";

//* Update user details in auth user state
const updateUserDisplayName = async (name) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
  } catch (err) {
    console.error(err);
  }
};

//* Check if user is patient or not
const isUserPatient = async () => {
  try {
    const docSnapshot = await getDoc(doc(db, "users", auth.currentUser.uid));
    if (docSnapshot.exists) {
      const { isPatient } = docSnapshot.data();
      return isPatient;
    }
  } catch (err) {
    console.error(err);
  }
};

//* Add new user to the DB
const addPatientBasicInfo = async (patientData) => {
  try {
    const { name, phone, dob } = patientData;
    updateUserDisplayName(name);
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: name,
      phone: phone,
      isPatient: true,
      details: {
        dob: dob,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

//* Add new doctor to the DB
const addDoctorBasicInfo = async (doctorData) => {
  try {
    const { name, phone, registrationNumber, registrationDate } = doctorData;
    updateUserDisplayName(name);
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name: name,
      phone: phone,
      isPatient: false,
      details: {
        registrationNumber: registrationNumber,
        registrationDate: registrationDate,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export { addPatientBasicInfo, addDoctorBasicInfo, isUserPatient };

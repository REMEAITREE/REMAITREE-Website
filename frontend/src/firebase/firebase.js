// Packages
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//* Configuration
import firebaseConfig from "./firebase.config";

const app = initializeApp(firebaseConfig);

//* Services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

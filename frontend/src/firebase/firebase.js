// Packages
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* Configuration
import firebaseConfig from "./firebase.config";

const app = initializeApp(firebaseConfig);

//* Services
const auth = getAuth(app);

export { app, auth };

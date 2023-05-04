// Packages
import { signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../../../firebase/firebase";

const signInHandler = (phone_number) => {
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phone_number, appVerifier)
    .then(
      (confirmationResult) => (window.confirmationResult = confirmationResult)
    )
    .catch((err) => console.error(err));
};

export { signInHandler };

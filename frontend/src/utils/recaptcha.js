// Package
import { RecaptchaVerifier } from "firebase/auth";

import { auth } from "../firebase/firebase";

const generateRecaptchaVerifier = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "normal",
    },
    auth
  );
};

export { generateRecaptchaVerifier };

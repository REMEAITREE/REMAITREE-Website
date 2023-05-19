// Packages
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../../../firebase/firebase";

// Utils
import { generateRecaptchaVerifier } from "../../../utils/recaptcha";

// Page components
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";
import FormRedirect from "../FormRedirect";

export default function SignIn() {
  const navigate = useNavigate();
  const [recaptchaAvailable, setRecaptchaAvailable] = useState(false);

  console.log(auth.currentUser);

  useEffect(() => {
    generateRecaptchaVerifier();
    //* Show captcha component
    const recaptchaVerifier = window.recaptchaVerifier;
    recaptchaVerifier
      .render()
      .then((widgetID) => {
        window.recaptchaWidgetID = widgetID;
        setRecaptchaAvailable(true);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
      window.recaptchaWidgetID = null;
    };
  }, []);

  //* Send OTP to the user
  const signInHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    let { phone } = data;

    if (isNaN(phone) || phone.length < 10) return;

    const recaptchaResponse = grecaptcha.getResponse(window.recaptchaWidgetID);
    if (recaptchaResponse) {
      phone = "+91" + phone;
      const appVerifier = window.recaptchaVerifier;
      //* Send OTP to user contact
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          navigate("/auth/otp", { state: { authType: "signin" } });
        })
        .catch((err) => {
          console.error(err);
          grecaptcha.reset(window.recaptchaWidgetId);
        });
    }
  };

  return auth.currentUser ? (
    <Navigate to="/" replace />
  ) : (
    <form
      className="flex flex-col justify-between items-center gap-7"
      onSubmit={signInHandler}
    >
      <h2 className="text-2xl font-bold mb-5">Sign In</h2>

      <InputField
        type="tel"
        name="phone"
        placeholder="Enter Contact: +91 9876543210"
        pattern="[0-9]{10}"
        required
      />

      <div id="recaptcha-container"></div>

      <SubmitButton
        type="submit"
        text="Send OTP"
        disabled={!recaptchaAvailable}
      />

      <FormRedirect />
    </form>
  );
}

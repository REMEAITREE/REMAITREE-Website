// Packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../../../../firebase/firebase";

// Utils
import { generateRecaptchaVerifier } from "../../../../utils/recaptcha";

// Page components
import InputField from "../../InputField";
import SubmitButton from "../../SubmitButton";
import DateSelector from "../DateSelector";

export default function PatientForm() {
  const navigate = useNavigate();
  const [recaptchaAvailable, setRecaptchaAvailable] = useState(false);

  useEffect(() => {
    window.confirmationResult = null;
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

  //* Sign up handler
  const signUpHandler = (e) => {
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
          navigate("/auth/otp", {
            state: { authType: "patient", userData: data },
          });
        })
        .catch((err) => {
          console.error(err);
          grecaptcha.reset(window.recaptchaWidgetId);
        });
    }
  };

  return (
    <form
      className="flex flex-col justify-between items-center gap-5 md:gap-7 mb-5"
      autoComplete="off"
      onSubmit={signUpHandler}
    >
      <h2 className="text-2xl font-bold">Sign Up as a patient</h2>

      <InputField
        type="text"
        name="name"
        placeholder="Enter your full name"
        required
      />
      <InputField
        type="tel"
        name="phone"
        placeholder="Enter Contact: +91 9876543210"
        pattern="[0-9]{10}"
        required
      />

      <InputField
        type="text"
        name="bloodGroup"
        placeholder="Enter blood group"
        required
      />

      <InputField type="text" name="height" placeholder="Enter height(in cm)" />
      <InputField type="text" name="weight" placeholder="Enter weight(in kg)" />

      <InputField
        type="text"
        name="age"
        placeholder="Enter your age"
        pattern="[0-9]*"
      />

      <div id="recaptcha-container"></div>

      <SubmitButton
        type="submit"
        text="Send OTP"
        disabled={!recaptchaAvailable}
      />
    </form>
  );
}

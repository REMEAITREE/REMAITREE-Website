// Packages
import { useEffect, useState } from "react";

// Utils
import { generateRecaptchaVerifier } from "../../../../utils/recaptcha";

// Page components
import InputField from "../../InputField";
import SubmitButton from "../../SubmitButton";

export default function PatientForm() {
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
      window.recaptchaVerifier = null;
      window.recaptchaWidgetID = null;
    };
  }, []);

  return (
    <form
      className="flex flex-col justify-between items-center gap-7"
      autoComplete="off"
    >
      <h2 className="text-2xl font-bold mb-5">Sign Up</h2>

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

      <div id="recaptcha-container"></div>

      <SubmitButton
        type="submit"
        text="Send OTP"
        disabled={!recaptchaAvailable}
      />
    </form>
  );
}

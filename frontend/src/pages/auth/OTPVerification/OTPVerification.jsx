// Packages
import { useLocation, useNavigate } from "react-router-dom";

// Page components
import InputBox from "./InputBox";
import SubmitButton from "../SubmitButton";

// Hooks
import useUserContext from "../../../hooks/useUserContext";

// Request handlers
import {
  addPatientBasicInfo,
  addDoctorBasicInfo,
  isUserPatient,
} from "../../../api/FirestoreUserRequests";

export default function OTPVerification() {
  const navigate = useNavigate();

  const { authType, userData } = useLocation().state;

  const { setCurrentUser } = useUserContext();

  const verifyOTP = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    //* Consolidate values to single string
    const otp = Object.values(data).join("");

    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        switch (authType) {
          case "signin":
            setCurrentUser({
              ...result.user,
              isPatient: isUserPatient(result.user.uid),
            });
            break;

          case "patient":
            setCurrentUser({ ...result.user, isPatient: true });
            addPatientBasicInfo(userData);
            break;

          case "doctor":
            setCurrentUser({ ...result.user, isPatient: false });
            addDoctorBasicInfo(userData);
            break;

          default:
            break;
        }
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-10 mt-20"
      onSubmit={verifyOTP}
      autoComplete="off"
    >
      <h3 className="font-medium text-xl text-center">
        Please enter the received OTP below!
      </h3>

      <div className="flex justify-between items-center gap-3">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <InputBox
            name={idx}
            key={idx}
            maxLength={1}
            type="text"
            pattern="[0-9]{1}"
            title="Must be a number!"
            required
          />
        ))}
      </div>

      <SubmitButton text="Verify OTP" type="submit" />
    </form>
  );
}

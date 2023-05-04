// Page components
import InputBox from "./InputBox";
import SubmitButton from "../SubmitButton";

export default function OTPVerification() {
  const verifyOTP = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    //* Consolidate values to single string
    const otp = Object.values(data).join("");

    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-10"
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

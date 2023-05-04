// Packages
import { useNavigate } from "react-router-dom";

export default function FormRedirect(props) {
  const navigate = useNavigate();

  const { formType } = props;

  //* Setting text
  let text = "Don't have an account?";
  let callToActionText = "Sign Up!";
  if (formType === "signup") {
    text = "Already have an account?";
    callToActionText = "Sign In!";
  }

  //* Redirect function
  const redirect = () => {
    if (formType === "signup") {
      navigate("/auth/signin");
    } else {
      navigate("/auth/signup");
    }
  };

  return (
    <h3 className="mt-5">
      {text + " "}
      <span
        className="text-secondary scale-100 font-medium cursor-pointer underline hover:text-primary active:text-accent transition"
        onClick={redirect}
      >
        {callToActionText}
      </span>
    </h3>
  );
}

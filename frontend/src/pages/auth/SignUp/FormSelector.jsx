// Page components
import FormRedirect from "../FormRedirect";

// Assets
import DoctorIcon from "../../../assets/icons/doctor_icon.png";
import PatientIcon from "../../../assets/icons/patient_icon.png";

export default function FormSelector(props) {
  const { setShowFormSelector, setIsPatientForm } = props;
  return (
    <section className="flex flex-col justify-between items-center gap-7 ">
      <h3 className="text-center text-2xl font-medium">Register as a ...</h3>

      <div className="flex justify-between items-center flex-col md:flex-row gap-5">
        <FormSelectCard
          title="Patient"
          icon={PatientIcon}
          onClickHandler={() => {
            setShowFormSelector(false);
            setIsPatientForm(true);
          }}
        />
        <FormSelectCard
          title="Doctor"
          icon={DoctorIcon}
          onClickHandler={() => {
            setShowFormSelector(false);
          }}
        />
      </div>

      <FormRedirect formType="signup" />
    </section>
  );
}

const FormSelectCard = (props) => {
  const { title, icon, onClickHandler } = props;
  return (
    <div
      onClick={onClickHandler}
      className="flex justify-start items-center gap-5 border border-primary rounded-md p-4 cursor-pointer hover:shadow-lg hover:border-secondary hover:border-2 transition active:shadow-inner md:flex-col md:px-10"
    >
      <div className="w-16 md:w-24">
        <img src={icon} alt={title + " icon"} className="w-full h-full" />
      </div>

      <h4 className="font-medium text-xl md:text-2xl">{title}</h4>
    </div>
  );
};

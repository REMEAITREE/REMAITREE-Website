// Packages
import { useNavigate } from "react-router-dom";

// Assets
import PDFIcon from "../../assets/icons/pdf_icon.png";

export default function PdfCard(props) {
  const navigate = useNavigate();

  const { fileName } = props;

  return (
    <div
      className="flex items-center gap-3 hover:scale-95 active:scale-90 rounded-md border-2 border-secondary mx-2 md:flex-col transition"
      onClick={() => {
        navigate("/reports/view", { state: { ...props } });
      }}
    >
      <div className="w-10 md:w-20 min-w-[40px]">
        <img className="w-full" src={PDFIcon} alt="PDF" />
      </div>

      <h3 className="break-words overflow-hidden md:text-center">{fileName}</h3>
    </div>
  );
}

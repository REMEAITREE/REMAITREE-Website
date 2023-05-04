export default function SubmitButton(props) {
  const { text, ...attributes } = props;
  const { disabled } = attributes;
  return (
    <button
      {...attributes}
      className={
        "bg-primary text-white font-medium px-10 py-2 rounded-lg  " +
        (disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-secondary active:bg-primary transition cursor-pointer")
      }
    >
      {text}
    </button>
  );
}

export default function DateSelector(props) {
  const { text, name } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-2 border border-secondary p-2 rounded-lg">
      <label htmlFor="date" className="opacity-50 text-center">
        {text}
      </label>
      <input type="date" name={name} id="date" required />
    </div>
  );
}

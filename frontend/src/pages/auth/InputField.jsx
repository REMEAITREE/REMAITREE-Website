export default function InputField(props) {
  return (
    <input
      {...props}
      className="border-b-[1px] border-primary outline-none w-[32ch] p-2 focus:border-b-2 focus:border-secondary transition"
    />
  );
}

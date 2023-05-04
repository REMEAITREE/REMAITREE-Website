export default function InputBox(props) {
  return (
    <input
      type="text"
      className="outline-none border border-primary w-10 h-10 md:w-14 md:h-14 text-center text-xl md:text-2xl focus:border-secondary focus:border-2 transition"
      {...props}
    />
  );
}

export default function Home() {
  return (
    <>
      <button
        className="bg-primary text-white p-10 mx-5"
        onClick={() => (window.location = "/auth/signin")}
      >
        Sign in
      </button>
      <button
        className="bg-primary text-white p-10 mx-5"
        onClick={() => (window.location = "/auth/signup")}
      >
        Sign up
      </button>
    </>
  );
}

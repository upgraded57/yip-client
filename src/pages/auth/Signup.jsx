import { signUp } from "../../utils/Functions";

export default function Signup({ setAuthState }) {
  const signupUser = async (e) => {
    e.preventDefault();
    // get all user form data
    const userData = Object.fromEntries(new FormData(e.target));

    // Hit API to sign user up
    signUp(userData);
  };
  return (
    <div className="basis-full md:basis-2/5 bg-white">
      <form
        method="post"
        onSubmit={signupUser}
        className="h-full w-full flex items-center justify-center gap-6 flex-col px-6"
      >
        <span className="text-center mb-2">
          <h1 className="text-4xl font-bold">Sign Up</h1>
          <p className="text-sm">Welcome, New User</p>
        </span>

        <label htmlFor="fullName" className="form-control w-full">
          <p className="text-sm uppercase">full name</p>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="email" className="form-control w-full">
          <p className="text-sm uppercase">email address</p>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="phone" className="form-control w-full">
          <p className="text-sm uppercase">phone number</p>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            inputMode="numeric"
            className="input input-bordered w-full"
          />
        </label>

        <button
          type="submit"
          className="uppercase btn text-white font-semibold bg-pink-clr w-full p-3 rounded-lg"
        >
          sign up
        </button>
        <span className="flex gap-3 items-center">
          <p className="text-xs">Already have an account? </p>
          <p
            className="text-sm font-semibold text-pink-clr cursor-pointer"
            onClick={() => setAuthState("login")}
          >
            Sign In
          </p>
        </span>
      </form>
    </div>
  );
}

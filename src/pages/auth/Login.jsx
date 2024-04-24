import { login } from "../../utils/Functions";

export default function Login({ setAuthState }) {
  const loginUser = (e) => {
    e.preventDefault();
    // collect user credentials for login
    const loginData = Object.fromEntries(new FormData(e.target));

    login(loginData);
  };
  return (
    <div className="basis-full md:basis-2/5 bg-white">
      <form
        method="post"
        onSubmit={loginUser}
        className="h-full w-full flex items-center justify-center gap-6 flex-col px-6"
      >
        <span className="text-center mb-2">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-sm">Welcome back</p>
        </span>

        <label htmlFor="email" className="form-control w-full">
          <p className="text-sm uppercase">email address</p>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input input-bordered w-full"
          />
        </label>

        <button
          type="submit"
          className="uppercase btn text-white font-semibold bg-pink-clr w-full p-3 rounded-lg"
        >
          sign in
        </button>
        <span className="flex gap-3 items-center">
          <p className="text-xs">Don't have an account </p>
          <p
            className="text-sm font-semibold text-pink-clr cursor-pointer"
            onClick={() => setAuthState("signup")}
          >
            Sign Up
          </p>
        </span>
      </form>
    </div>
  );
}

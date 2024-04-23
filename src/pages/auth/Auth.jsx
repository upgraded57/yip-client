import { useState } from "react";
import logo from "../../assets/logo.svg";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [authState, setAuthState] = useState("login");
  const AuthScreen = authState === "login" ? Login : Signup;

  return (
    <div className="w-full h-full flex relative items-center justify-center min-h-[100dvh] bg-gradient-to-r from-[#DB5E88] to-[#F6BC99]">
      <div className="flex rounded-2xl overflow-hidden h-[560px] w-[1000px] max-w-[94vw] mx-auto">
        {/* logo */}
        <div className="w-[30px] aspect-square text-white overflow-hidden absolute top-[20px] ">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover invert"
          />
        </div>

        {/* left side image */}
        <div className="hidden md:block md:basis-3/5 overflow-hidden h-full">
          <img
            src="https://images.unsplash.com/photo-1515861209048-dae6a1e1ed56?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Map Image"
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Sign in form */}
        <AuthScreen setAuthState={setAuthState} />
      </div>
    </div>
  );
}

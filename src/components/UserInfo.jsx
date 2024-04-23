import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserInfo() {
  const user = useContext(AuthContext);
  const userInitials =
    user.fullName.split(" ")[0].split("")[0] +
    user.fullName.split(" ")[1].split("")[0];
  console.log(user);
  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl max-w-[96vw] mx-auto md:mx-0 md:max-w-[max-content] relative top-[2vw] md:left-[10vw] flex items-center gap-4">
      <div className="w-[60px] aspect-square rounded-full bg-[#aeaeae] uppercase text-2xl font-semibold text-white flex items-center justify-center">
        {userInitials}
      </div>
      <div className="flex flex-col justify-start gap-1">
        <h1 className="text-xl font-semibold text-black">
          Welcome, {user.fullName}
        </h1>
        <span className="flex items-center gap-4">
          <p className="text-sm">Your location: (-71.453, 2.975)</p>
          <button
            type="button"
            className="btn btn-sm bg-pink-clr  text-white rounded-full"
          >
            Center
          </button>
        </span>
      </div>
    </div>
  );
}

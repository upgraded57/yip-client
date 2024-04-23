import React, { useContext } from "react";
import { AuthContext } from "./../context/AuthContext";
import UserInfo from "./../components/UserInfo";

export default function Home() {
  const user = useContext(AuthContext);
  return (
    <div className="bg-pink-clr min-h-full">
      <UserInfo />
    </div>
  );
}

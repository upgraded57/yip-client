import React, { useContext } from "react";
import { StateContext } from "../../context/StateContext";
import { Navigate } from "react-router-dom";

export default function Redir() {
  const { user } = useContext(StateContext);
  return <Navigate to={`/${user._id}`} />;
}

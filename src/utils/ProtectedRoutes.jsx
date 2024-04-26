import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/StateContext";

export default function ProtectedRoutes() {
  const { user } = useContext(StateContext);

  return user ? <Outlet /> : <Navigate to="/auth" />;
}

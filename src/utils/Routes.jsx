import Home from "../pages/Home";
import Auth from "./../pages/auth/Auth";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    ),
  },

  {
    path: "auth",
    element: <Auth />,
  },
];

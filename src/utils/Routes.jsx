import Home from "../pages/Home";
import Auth from "./../pages/auth/Auth";
import ProtectedRoutes from "./ProtectedRoutes";

export const routes = [
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "auth",
    element: <Auth />,
  },
];

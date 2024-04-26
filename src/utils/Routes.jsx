import axios from "axios";
import Home from "../pages/Home";
import Auth from "./../pages/auth/Auth";
import ProtectedRoutes from "./ProtectedRoutes";
import Redir from "../pages/auth/Redir";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const routes = [
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Redir />,
      },
      {
        path: "/:userId",
        element: <Home />,
        loader: ({ params }) => {
          const { userId } = params;
          return axios.get(`${baseUrl}/pins/user/${userId}`);
        },
      },
    ],
  },

  {
    path: "auth",
    element: <Auth />,
  },
];

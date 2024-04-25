import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <AuthContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;

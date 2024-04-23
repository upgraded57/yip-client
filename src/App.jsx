import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthContextProvider>
    </>
  );
}

export default App;

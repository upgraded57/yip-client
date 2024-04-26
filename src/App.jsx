import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import { Toaster } from "react-hot-toast";
import { StateContextProvider } from "./context/StateContext";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <StateContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </StateContextProvider>
    </>
  );
}

export default App;

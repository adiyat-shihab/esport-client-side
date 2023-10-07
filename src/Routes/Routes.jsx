import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://api.npoint.io/75f4828fb2b7a4904e89"),
      },
    ],
  },
]);

const Routes = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default Routes;

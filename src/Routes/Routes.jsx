import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Banner from "../Component/Banner/Banner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
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

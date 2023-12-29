import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../skin/guest";
import { GuardSkin } from "../skin/guard";
import { Login } from "../component/pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestSkin />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default routes;

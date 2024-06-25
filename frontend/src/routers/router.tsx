import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "./Home";
import { Signup } from "./SignUp";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { ErrorPage } from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

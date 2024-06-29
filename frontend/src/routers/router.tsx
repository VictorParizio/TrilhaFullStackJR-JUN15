import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "./pages/Home";
import { Signup } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ErrorPage } from "./pages/ErrorPage";
import { Dashboard } from "./pages/Dashboard";
import { Project } from "./pages/Dashboard/Project";
import { ProjectDetails } from "./pages/Dashboard/ProjectDetails";
import { Profile } from "./pages/Dashboard/Profile";
import { TeamMember } from "./pages/Dashboard/TeamMember";
import { Contact } from "./pages/Dashboard/Contact";
import { Settings } from "./pages/Dashboard/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "project/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "team-member",
        element: <TeamMember />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

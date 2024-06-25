import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Inicio",
    href: "#hero",
  },
  {
    label: "Recursos",
    href: "#features",
  },
  {
    label: "Novidades",
    href: "#news",
  },
  {
    label: "Comunidade",
    href: "#community",
  },
];

const handleLogout = () => {
  return sessionStorage.removeItem("token");
};

export const MenuMobile = () => {
  const [toggle, setToggle] = useState(false);
  const { hash: currentHash } = useLocation();

  const btnMobile = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`mobile ${toggle ? "active" : ""}`}>
      <button className="btn-mobile" onClick={btnMobile}>
        <span className="hamburguer"></span>
      </button>

      <ul className="menu">
        {navItems.map((route) => (
          <li key={route.label}>
            <a
              href={route.href}
              onClick={btnMobile}
              className={currentHash === route.href ? "active" : ""}
            >
              {route.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};

import { Link, useLocation } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";

export const Navbar = () => {
  const { pathname: currentPathname, hash: currentHash } = useLocation();

  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#features", label: "Recursos" },
    { href: "#news", label: "Novidades" },
    { href: "#community", label: "Comunidade" },
  ];

  return (
    <div className="container-header">
      <header className="header">
        <Link to="/" className="logo">
          <strong>Smart</strong>Plan
        </Link>

        {currentPathname === "/" && (
          <>
            <nav>
              <ul>
                {navItems.map((route) => (
                  <li key={route.label}>
                    <a
                      href={route.href}
                      className={currentHash === route.href ? "active" : ""}
                    >
                      {route.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="auth home">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
            <MenuMobile />
          </>
        )}

        {currentPathname === "/login" && (
          <div className="auth">
            <Link to="/signup">Signup</Link>
          </div>
        )}

        {currentPathname === "/signup" && (
          <div className="auth">
            <Link to="/login">login</Link>
          </div>
        )}
      </header>
    </div>
  );
};

import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const { pathname: currentPathname, hash: currentHash } = useLocation();

  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#news", label: "Novidades" },
    { href: "#features", label: "Recursos" },
    { href: "#community", label: "Comunidade" },
  ];

  return (
    <div className="container-header">
      <section className="header">
        <Link to="/" className="logo">
          <strong>Smart</strong>Plan
        </Link>

        {currentPathname === "/" && (
          <>
            <nav>
              <ul>
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={currentHash === href ? "active" : ""}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="auth">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
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
      </section>
    </div>
  );
};

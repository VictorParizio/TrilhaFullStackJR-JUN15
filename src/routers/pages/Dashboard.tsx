import { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { BsFillPersonVcardFill, BsGearFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { TfiBlackboard } from "react-icons/tfi";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export const Dashboard = () => {
  const { pathname: currentPathname } = useLocation();
  const [toggle, setToggle] = useState(false);

  const btnMobile = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    return sessionStorage.removeItem("token");
  };

  return (
    <section className={`container-dashboard ${toggle ? "active" : ""}`}>
      <section className={`container-sidebar ${toggle ? "active" : ""}`}>
        <Link to="/" className="logo">
          {toggle ? (
            <>
              <strong>Smart</strong>Plan
            </>
          ) : (
            <>
              <strong>S</strong>P
            </>
          )}
        </Link>

        <button className="btn-mobile" onClick={btnMobile}>
          <span className="hamburguer"></span>
        </button>

        <nav className="menu">
          <ul className="content-sidebar">
            <li>
              <NavLink to="project">
                <TfiBlackboard />
                Projeto
              </NavLink>
            </li>
            <li>
              <NavLink to="profile">
                <BsFillPersonVcardFill />
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="team-member">
                <RiTeamFill />
                Membros
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                <BiSolidContact />
                Contatos
              </NavLink>
            </li>
            <li>
              <NavLink to="settings">
                <BsGearFill />
                Configurações
              </NavLink>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                <FaSignOutAlt />
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {currentPathname === "/dashboard" && (
        <section className="welcome-message">
          <h1>
            Bem-vindo ao
            <br />
            <strong>Dashboard Smart Plan</strong>!
          </h1>
          <p>
            Aqui você pode acompanhar, gerenciar e otimizar todos os seus
            projetos em um só lugar. Utilize as ferramentas disponíveis para{" "}
            <strong>monitorar o progresso</strong>,{" "}
            <strong>colaborar com sua equipe</strong> e{" "}
            <strong>alcançar suas metas</strong> com eficiência.
          </p>
          <p>
            Estamos aqui para ajudá-lo a transformar suas ideias em realidade.
            Vamos começar?
          </p>
        </section>
      )}

      <section className="container-board">
        <div className="up-orb" />
        {currentPathname !== "/dashboard" && <Outlet />}
        <div className="down-orb" />
      </section>
    </section>
  );
};

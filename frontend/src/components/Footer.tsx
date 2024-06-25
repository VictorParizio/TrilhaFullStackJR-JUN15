import { FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="container-footer">
      <footer role="region" aria-label="Rodapé do site">
        <ul className="links-utils">
          <li>
            <a
              href="https://www.linkedin.com/in/victorpariziobackend/"
              target="_blank"
              aria-label="Perfil do Victor Parizio no LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/VictorParizio"
              target="_blank"
              aria-label="Perfil do Victor Parizio no GitHub"
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href="https://portfolio-victor-parizio.vercel.app/"
              target="_blank"
              aria-label="Portfólio do Victor Parizio"
            >
              <FaUserTie />
            </a>
          </li>
        </ul>

        <p>
          Desenvolvido por <strong>Victor Parizio</strong>
        </p>

        <div className="top"></div>
      </footer>
    </div>
  );
};

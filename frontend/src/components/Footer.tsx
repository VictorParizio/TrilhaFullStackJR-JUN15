import { FaLinkedin, FaGithub, FaUserTie } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="container-footer">
      <footer>
        <ul className="links-utils">
          <li>
            <a
              href="https://www.linkedin.com/in/victorpariziobackend/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/VictorParizio"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href="https://portfolio-victor-parizio.vercel.app/"
              target="_blank"
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

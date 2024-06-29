import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdDevices, MdLibraryAdd, MdOutlineSecurity } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

import { Carousel } from "../../components/Carousel";

import ipad from "/mockup/ipad.png";

export const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const userAuthenticated = !!sessionStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home">
      <div className="bg-banner" />
      <div className="bg-blur" />

      <section id="hero">
        <div className="info-hero">
          <p>Mantenha seus projetos seguros!</p>
          <h1>
            Seu novo <strong>Gerenciador</strong> de Projetos{" "}
            <strong>Favorito!</strong>
          </h1>

          <Link
            to={userAuthenticated ? "/dashboard" : "/login"}
            className="btn-main"
          >
            Experimente agora mesmo!
          </Link>
        </div>
        <img
          src={ipad}
          alt=""
          className={loaded ? "image animated" : "image"}
        />
      </section>

      <section id="features">
        <div className="up-orb" />
        <Carousel />
        <div className="down-orb" />
      </section>

      <section id="news">
        <div className="bg-container" />
        <h2>
          <strong>Novidades</strong> que oferecemos para você
        </h2>
        <ul>
          <li>
            <MdOutlineSecurity className="icon" />
            <div>
              <strong>+ Segurança nos seus Projetos</strong>
              <p>
                Cadastre-se e faça login com segurança, sabendo que suas
                informações estão protegidas.
              </p>
            </div>
          </li>
          <li>
            <MdLibraryAdd className="icon" />
            <div>
              <strong>Criação de Projetos</strong>
              <p>
                Adicione novos projetos com facilidade, fornecendo título e
                descrição.
              </p>
            </div>
          </li>
          <li>
            <FaEdit className="icon" />
            <div>
              <strong>Edição e Atualização</strong>
              <p>
                Mantenha seus projetos sempre atualizados, editando informações
                conforme necessário.
              </p>
            </div>
          </li>
          <li>
            <RiDeleteBin6Fill className="icon-trash" />
            <div>
              <strong>Exclusão de Projetos</strong>
              <p>
                Remova projetos concluídos ou cancelados com um simples clique.
              </p>
            </div>
          </li>
          <li>
            <IoSearch className="icon-search" />
            <div>
              <strong>Pesquisa e Filtragem</strong>
              <p>
                Encontre o projeto que você está procurando com nossas
                ferramentas de pesquisa.
              </p>
            </div>
          </li>
          <li>
            <MdDevices className="icon-devices" />
            <div>
              <strong>Interface Responsiva</strong>
              <p>
                Acesse e gerencie seus projetos de qualquer dispositivo desktop,
                tablet ou smartphone.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section id="community">
        <div className="up-orb" />
        <h2>
          Junte-se à Comunidade <strong>Smart Plan</strong>
        </h2>

        <p>
          Comece hoje mesmo a organizar seus projetos com o Gerenciador de
          Projetos <strong>Smart Plan</strong>. Inscreva-se, explore nossas
          funcionalidades e descubra como podemos ajudar você a alcançar seus
          objetivos de maneira mais eficiente e organizada.
        </p>

        <Link
          to={userAuthenticated ? "/dashboard" : "/login"}
          className="btn-main"
        >
          Experimente agora mesmo!
        </Link>
        <div className="down-orb" />
      </section>
    </section>
  );
};

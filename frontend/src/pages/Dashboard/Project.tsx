import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAPI, postAPI } from "../../http";
import { InputForm } from "../../components/InputForm";

interface Project {
  id: string;
  title: string;
  description: string;
}

export const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dataProject = { title, description };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange =
    (setFunction: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFunction(event.target.value);
    };

  const handleAddProject = async (event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);

    try {
      await postAPI("project", dataProject);
      const dataAPI = await getAPI("project");
      setProjectData(dataAPI);
    } catch (error: any) {
      console.error(
        error.response?.data?.message ||
          "Ocorreu um erro ao criar um novo projeto."
      );
    } finally {
      setTitle("");
      setDescription("");
      setIsSending(false);
      toggleModal();
    }
  };

  useEffect(() => {
    (async function () {
      setIsSending(true);
      setMessage(
        "Quase lá! Grandes ideias precisam de um tempo para ficarem prontas"
      );

      try {
        const dataAPI = await getAPI("project");
        setProjectData(dataAPI);

        if (dataAPI.length === 0) {
          setMessage("Clique em Novo para adicionar um Projeto.");
        }
      } catch (error: any) {
        console.error(
          error.response?.data?.message ||
            "Ocorreu um erro ao carregar os projetos."
        );
      } finally {
        setTitle("");
        setDescription("");
        setIsSending(false);
      }
    })();
  }, []);

  const isButtonDisabled = title.length < 3 || description.length < 3;

  return (
    <section className="container-project">
      <header className="header-project">
        <form className="search">
          <h1>Projetos</h1>
          <InputForm
            textLabel={""}
            type={"text"}
            name={"search"}
            value={searchTerm}
            placeholder={"Pesquisar por Projeto"}
            onChange={handleInputChange(setSearchTerm)}
          />
        </form>
        <div className="painel-controls">
          <div></div>
          <div className="controls">
            <button className="btn-secundary" onClick={toggleModal}>
              + Novo
            </button>
          </div>
        </div>
      </header>

      <section className="container-board">
        {projectData.map((project) => (
          <Link to={project.id} key={project.id} className="card-project">
            <h2 className="title-project">{project.title}</h2>
            <p className="description-project">{project.description}</p>
          </Link>
        ))}
      </section>

      {isOpen && (
        <div className="modal-add-project">
          <div className="container-modal">
            <header className="modal-header">
              <h2>Novo Projeto</h2>
            </header>
            <form onSubmit={handleAddProject}>
              <InputForm
                textLabel={"Título"}
                type={"text"}
                name={"title"}
                value={title}
                placeholder={"Título do projeto"}
                onChange={handleInputChange(setTitle)}
              />
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={description}
                placeholder={"Descrição do projeto"}
                rows={4}
                cols={50}
                onChange={handleInputChange(setDescription)}
              />
              <div className="action-buttons">
                <button
                  type="submit"
                  className="btn-main"
                  disabled={isButtonDisabled || isSending}
                >
                  {isSending ? "...enviando!" : "Adicionar"}
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={toggleModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {projectData.length === 0 && message && (
        <div className="message">
          <h2>{isSending ? "Carregando..." : "Pronto(a) para Começar?"}</h2>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

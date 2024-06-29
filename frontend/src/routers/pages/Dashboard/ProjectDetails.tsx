import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteByIdAPI, findByIdAPI, updateByIdAPI } from "../../../http";
import { InputForm } from "../../../components/InputForm";
import { IoIosWarning } from "react-icons/io";

interface ProjectData {
  id: string;
  title: string;
  description: string;
}

export const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [projectData, setProjectData] = useState<ProjectData>({
    id: "",
    title: "",
    description: "",
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpenModalDelete, setOpenModalDelete] = useState(false);
  const [isOpenModalUpdate, setOpenModalUpdate] = useState(false);
  const navigate = useNavigate();

  const toggleModalDelete = () => setOpenModalDelete(!isOpenModalDelete);
  const toggleModalUpdate = () => setOpenModalUpdate(!isOpenModalUpdate);

  const handleInputChange =
    (setFunction: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value);
    };

  const handleUpdateProject = async (event: FormEvent) => {
    event.preventDefault();
    const objectData = { title, description };

    try {
      const dataAPI = await updateByIdAPI("project", projectId!, objectData);
      setProjectData(dataAPI);
      setTitle(dataAPI.title);
      setDescription(dataAPI.description);
    } catch (error: any) {
      console.error(
        error.response?.data?.message ||
          "An error occurred while updating the project data."
      );
    }
    toggleModalUpdate();
  };

  const handleDeleteProject = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await deleteByIdAPI("project", projectId!);
      navigate("/dashboard/project");
    } catch (error: any) {
      console.error(
        error.response?.data?.message ||
          "An error occurred while deleting the project."
      );
    }
    toggleModalDelete();
  };

  useEffect(() => {
    (async function () {
      try {
        const dataAPI = await findByIdAPI("project", projectId!);
        setProjectData(dataAPI);
        setTitle(dataAPI.title);
        setDescription(dataAPI.description);
      } catch (error: any) {
        console.error(
          error.response?.data?.message ||
            "An error occurred while loading the project data."
        );
        setProjectData({ id: "", title: "", description: "" });
      }
    })();
  }, [projectId, isOpenModalUpdate]);

  return (
    <section className="container-project">
      <header className="header-project">
        <form className="search">
          <h1>Detalhes do Projetos</h1>
          <InputForm
            textLabel={""}
            type={""}
            name={""}
            value={""}
            placeholder={"Pesquisar por Projeto"}
            onChange={() => {}}
          />
        </form>
        <div className="painel-controls">
          <div></div>
          <div className="controls">
            <button className="btn-secundary" onClick={toggleModalUpdate}>
              Editar
            </button>
            <button className="btn-secundary" onClick={toggleModalDelete}>
              Excluir
            </button>
          </div>
        </div>
      </header>

      <section className="container-board">
        <div className="card-project" onClick={toggleModalUpdate}>
          {projectData.id === "" && (
            <div className="loading">
              <h2>Carregando...</h2>
              <p>
                Quase lá! Grandes ideias precisam de um tempo para ficarem
                prontas
              </p>
            </div>
          )}
          <h2 className="title-project">{projectData.title}</h2>
          <p className="description-project">{projectData.description}</p>
        </div>
      </section>

      {isOpenModalDelete && (
        <div className="modal-add-project">
          <div className="container-modal">
            <header className="modal-header warning">
              <h2>Essa ação é irreversível!</h2>
            </header>

            <IoIosWarning />

            <p>Deseja excluir este projeto?</p>

            <div className="action-buttons">
              <button className="btn-main" onClick={handleDeleteProject}>
                Excluir!
              </button>
              <button className="btn-cancel" onClick={toggleModalDelete}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpenModalUpdate && (
        <div className="modal-add-project">
          <div className="container-modal">
            <header className="modal-header">
              <h2>Editar Projeto</h2>
            </header>
            <form>
              <InputForm
                textLabel={"Title"}
                type={"text"}
                name={"title"}
                value={title}
                placeholder={"Edit project title"}
                onChange={handleInputChange(setTitle)}
              />
              <InputForm
                textLabel={"Description"}
                type={"text"}
                name={"description"}
                value={description}
                placeholder={"Edit project description"}
                onChange={handleInputChange(setDescription)}
              />

              <div className="action-buttons">
                <button className="btn-main" onClick={handleUpdateProject}>
                  Confirmar!
                </button>
                <button className="btn-cancel" onClick={toggleModalUpdate}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

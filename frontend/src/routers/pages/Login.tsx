import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { postAPI } from "../../http";
import { InputForm } from "../../components/InputForm";

export const Login = () => {
  const [formValues, handleInputChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      throw new Error("Todos os campos são obrigatórios");
    }
    try {
      const response = await postAPI("session", formValues);
      sessionStorage.setItem("token", response.access_token);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response.data.message) {
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
      }
      console.log(error.response.data.message);
      throw new Error(
        "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <section className="container-auth">
      <div className="info">
        <h1>
          Acesse Seus Projetos e Continue{" "}
          <strong>Transformando Ideias em Realidade</strong>
        </h1>
        <p>
          Estamos felizes em ver você novamente! Faça login na sua conta para
          continuar gerenciando seus projetos com eficiência e organização.
        </p>
        <p>
          Se você ainda não tem uma conta, <strong>registre-se agora</strong> e
          comece a aproveitar todas as nossas funcionalidades.
        </p>
      </div>

      <section className="container-form">
        <div className="bg-blur" />
        <form className="form" onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Email"}
            type="email"
            name="email"
            value={email}
            placeholder="Digite seu email"
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            name="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={handleInputChange}
          />

          <button>Entrar</button>
        </form>

        <div>
          <p>Novo por aqui?</p>
          <Link to="/signup">Crie uma conta</Link>
        </div>
      </section>
    </section>
  );
};

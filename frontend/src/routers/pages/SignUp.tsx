import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../../components/InputForm";
import { postAPI } from "../../http";
import { useForm } from "../../hooks/useForm";

export const Signup = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
      throw new Error("Todos os campos são obrigatórios");
    }

    if (name.length < 3) {
      throw new Error("O Nome deve conter ao menos 3 digitos");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      throw new Error("Formato de email inválido");
    }

    if (password.length < 6) {
      throw new Error("Senha deve conter ao menos 6 digitos");
    }

    try {
      const response = await postAPI("register", formValues);
      console.log(response);
      sessionStorage.setItem("token", response.access_token);
      navigate("/dashboard");
    } catch (error: any) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        console.log("Erro do lado do servidor: " + error);
      }
      throw error;
    }
  };
  return (
    <section className="container-auth">
      <div className="info">
        <h1>
          <strong>Junte-se a Nós</strong> e Comece a Gerenciar Seus Projetos com
          Eficácia!
        </h1>
        <p>
          Bem-vindo ao primeiro passo para transformar a maneira como você
          gerencia seus projetos!
        </p>
        <p>
          Na <strong>Smart Plan</strong>, oferecemos uma plataforma poderosa e
          intuitiva que facilita a organização, acompanhamento e conclusão de
          projetos.
        </p>
        <p>
          Registre-se agora para desbloquear todas as nossas funcionalidades e
          levar sua produtividade a um novo nível.
        </p>
      </div>
      <section className="container-form">
        <div className="bg-blur" />
        <form className="form" onSubmit={handleSubmit}>
          <InputForm
            textLabel={"Nome"}
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Email"}
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleInputChange}
          />
          <InputForm
            textLabel={"Senha"}
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handleInputChange}
          />

          <button>Cadastrar</button>
        </form>

        <div>
          <p>Já Tem uma Conta?</p>
          <Link to="/login" className="cta">
            Faça Login
          </Link>
        </div>
      </section>
    </section>
  );
};

import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { postAPI } from "../http";
import { InputForm } from "../components/InputForm";

interface ApiResponse {
  access_token: string;
}

export const Login = () => {
  const [messageError, setMessageError] = useState<string>("");
  const [formValues, handleInputChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setMessageError("Todos os campos são obrigatórios");
      throw new Error("Todos os campos são obrigatórios");
    }
    try {
      const response = (await postAPI("session", formValues)) as ApiResponse;
      sessionStorage.setItem("token", response.access_token);
      navigate("/dashboard");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || error.message || "Erro desconhecido";
      setMessageError(errorMessage);
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

          {messageError && <p className="message-error">{messageError}</p>}

          <button className="btn-main" type="submit">
            Entrar
          </button>
        </form>

        <div>
          <p>Novo por aqui?</p>
          <Link to="/signup">Crie uma conta</Link>
        </div>
      </section>
      <div className="up-orb" />
      <div className="down-orb" />
    </section>
  );
};

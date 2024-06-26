import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

const userAuthenticated = false;
const inputData = [
  { label: "Nome", type: "text", placeholder: "Digite seu nome" },
  { label: "Email", type: "email", placeholder: "Digite seu email" },
  { label: "Senha", type: "password", placeholder: "Digite seu senha" },
];

export const Signup = () => {
  return (
    <section className="container-signup">
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
        <form className="form">
          {inputData.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
        </form>

        <button>Cadastrar</button>

        <div>
          <p>Já Tem uma Conta?</p>
          <Link to={userAuthenticated ? "/dashboard" : "/"} className="cta">
            Faça Login
          </Link>
        </div>
      </section>
    </section>
  );
};

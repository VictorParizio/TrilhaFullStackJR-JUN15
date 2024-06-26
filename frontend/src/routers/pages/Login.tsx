import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

const userAuthenticated = false;
const inputData = [
  { label: "Email", type: "email", placeholder: "Digite seu email" },
  { label: "Senha", type: "password", placeholder: "Digite seu senha" },
];
export const Login = () => {
  return (
    <section className="container-login">
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

        <button>Entrar</button>

        <div>
          <p>Novo por aqui?</p>
          <Link to={userAuthenticated ? "/dashboard" : "/"} className="cta">
            Crie uma conta
          </Link>
        </div>
      </section>
    </section>
  );
};

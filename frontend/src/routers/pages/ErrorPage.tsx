import { Link } from "react-router-dom";

const userAuthenticated = false;

export const ErrorPage = () => {
  return (
    <section className="error-page">
      <h1>
        <strong>Oops!</strong> Parece que você se perdeu...
      </h1>
      <p>
        A página que você está procurando não foi encontrada. Isso pode ter
        ocorrido devido a um link quebrado, uma página removida ou um erro de
        digitação na URL. Não se preocupe, estamos aqui para ajudar você a
        encontrar o que procura!
      </p>

      <Link to={userAuthenticated ? "/dashboard" : "/"} className="cta">
        Vamos refazer a trilha
      </Link>
    </section>
  );
};

interface InputValues {
  name: string;
  email: string;
  password: string;
}

export const validateInput = ({ name, email, password }: InputValues): void => {
  if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
    throw new Error("Todos os campos são obrigatórios");
  }

  if (name.length < 3) {
    throw new Error("O Nome deve conter ao menos 3 dígitos");
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new Error("Formato de email inválido");
  }

  if (password.length < 6) {
    throw new Error("Senha deve conter ao menos 6 dígitos");
  }
};

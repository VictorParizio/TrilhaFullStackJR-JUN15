import joi from "joi";

export const userRegisterSchema = joi.object({
  name: joi.string().min(3).required().messages({
    "string.empty": "O campo nome é obrigatório.",
    "string.base": "O campo nome deve ser do tipo string.",
    "string.min": "A campo nome deve ter pelo menos 3 caracteres.",
    "any.required": "O campo nome é obrigatório.",
  }),
  email: joi.string().email().required().messages({
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email deve ser um endereço de email válido.",
    "any.required": "O campo email é obrigatório.",
  }),
  password: joi.string().min(6).required().messages({
    "string.empty": "O campo senha é obrigatório.",
    "string.base": "O campo senha deve ser do tipo string.",
    "string.min": "A senha deve ter pelo menos 6 caracteres.",
    "any.required": "O campo senha é obrigatório.",
  }),
});

export const userAuthSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email deve ser um endereço de email válido.",
    "any.required": "O campo email é obrigatório.",
  }),
  password: joi.string().required().messages({
    "string.empty": "Email e/ou senha inválido(s).",
    "string.base": "O campo senha deve ser do tipo string.",
    "any.required": "O campo senha é obrigatório.",
  }),
});

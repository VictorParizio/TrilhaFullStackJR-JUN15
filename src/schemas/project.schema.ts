import joi from "joi";

export const projectCreateSchema = joi.object({
  title: joi.string().min(3).required().messages({
    "string.empty": "Adicione um título.",
    "string.base": "O campo título deve ser do tipo string.",
    "string.min": "O campo título deve conter no mínimo 3 caracteres.",
    "any.required": "O campo título é obrigatório.",
  }),
  description: joi.string().min(3).required().messages({
    "string.empty": "Adicione uma descrição.",
    "string.base": "O campo descrição deve ser do tipo string.",
    "string.min": "O campo descrição deve conter no mínimo 3 caracteres.",
    "any.required": "O campo descrição é obrigatório.",
  }),
});

export const projectUpdateSchema = joi.object({
  title: joi.string().min(3).messages({
    "string.empty": "Adicione um título.",
    "string.base": "O campo título deve ser do tipo string.",
    "string.min": "O campo título deve conter no mínimo 3 caracteres.",
  }),
  description: joi.string().min(3).messages({
    "string.empty": "Adicione uma descrição.",
    "string.base": "O campo descrição deve ser do tipo string.",
    "string.min": "O campo descrição deve conter no mínimo 3 caracteres.",
  }),
});

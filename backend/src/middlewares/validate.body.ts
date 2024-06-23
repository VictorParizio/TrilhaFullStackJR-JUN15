import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateBody =
  (schema: Joi.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error: any) {
      if (error.name === "ValidationError") {
        return res.status(400).json({ mensagem: error.message });
      } else {
        return res.status(500).json({ mensagem: "Erro interno do Servidor" });
      }
    }
  };

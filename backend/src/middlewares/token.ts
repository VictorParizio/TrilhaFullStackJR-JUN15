import { findUserById } from "@/repositories/user.repository";
import { checkToken } from "@/util/jwt";
import { NextFunction, Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser?: string;
}

interface JwtPayload {
  id: string;
  exp?: number;
  iat?: number;
}

export const validateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Seja bem-vendo(a), faça login ou cadastre-se!",
    });
  }

  try {
    const token = authorization.split(" ")[1];
    const { id } = checkToken(token) as JwtPayload;
    const user = await findUserById(id);

    if (!user) {
      return res.status(404).json({ message: "O usuário não foi encontrado" });
    }

    req.authenticatedUser = user.id;

    next();
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Essa sessão expirou, faça login ou cadastre-se!",
      });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Essa sessão expirou, faça login ou cadastre-se!",
      });
    } else if (error.name === "SyntaxError") {
      return res.status(401).json({
        message: "Essa sessão expirou, faça login ou cadastre-se!",
      });
    } else {
      return res
        .status(500)
        .json({ mensagem: "Erro interno do Servidor " + error.name });
    }
  }
};

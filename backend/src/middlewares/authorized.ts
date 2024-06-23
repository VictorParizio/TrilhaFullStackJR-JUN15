import { findUserById } from "@/repositories/user.repository";
import { NextFunction, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser: string;
}

export const authorized = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.authenticatedUser;

  const user = await findUserById(id);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  next();
};

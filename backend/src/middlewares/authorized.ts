import { findProjectById } from "@/repositories/project.repositories";
import { findUserById } from "@/repositories/user.repository";
import { NextFunction, Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser: string;
}

export const authorized = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const projectId = req.params.id;
  const userId = req.authenticatedUser;
  const foundProject = await findProjectById(projectId);

  if (!foundProject || userId !== foundProject.user_id) {
    return res.status(404).json({ message: "Projeto não encontrado" });
  }

  const user = await findUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  next();
};

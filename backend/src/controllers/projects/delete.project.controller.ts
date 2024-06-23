import {
  findProjectById,
  removeProject,
} from "@/repositories/project.repositories";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser: string;
}

export const deleteProject = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { id } = req.params;
  const userId = req.authenticatedUser;

  try {
    const foundProject = await findProjectById(id);

    if (!foundProject || userId !== foundProject.user_id) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    await removeProject(id);
    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

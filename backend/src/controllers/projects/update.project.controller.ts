import {
  findProjectById,
  updateProject as updateProjectInRepository,
} from "@/repositories/project.repositories";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser: string;
}

export const updateProject = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const userId = req.authenticatedUser;

  try {
    const foundProject = await findProjectById(id);

    if (!foundProject) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    if (userId !== foundProject.user_id) {
      return res
        .status(403)
        .json({ message: "Você não tem permissão para editar este projeto." });
    }

    const data = { title, description };

    await updateProjectInRepository({ id, data });

    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ message: "Erro interno do Servidor" });
  }
};

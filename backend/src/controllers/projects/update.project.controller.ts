import { updateProject as updateProjectInRepository } from "@/repositories/project.repositories";
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

  try {
    const data = { title, description };
    await updateProjectInRepository({ id, data });
    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ message: "Erro interno do Servidor" });
  }
};

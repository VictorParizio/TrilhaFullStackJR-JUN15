import { removeProject } from "@/repositories/project.repositories";
import { Request, Response } from "express";

export const deleteProject = async (req: Request, res: Response) => {
  const projectId = req.params.id;

  try {
    await removeProject(projectId);
    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

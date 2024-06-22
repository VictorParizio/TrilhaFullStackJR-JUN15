import { findProjectById, removeProject } from "@/repositories/project.repositories";
import { Request, Response } from "express";

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const foundProject = await findProjectById(id)

    if (!foundProject) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    await removeProject(id)
    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

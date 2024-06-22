import {
  findProjectById,
  updateProject as updateProjectInRepository,
} from "@/repositories/project.repositories";
import { Request, Response } from "express";

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const foundProject = await findProjectById(id);

    if (!foundProject) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    const data = { title, description };

    await updateProjectInRepository({ id, data });

    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ message: "Erro interno do Servidor" });
  }
};

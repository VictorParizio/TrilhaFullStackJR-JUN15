import { findProjectById } from "@/repositories/project.repositories";
import { Request, Response } from "express";

export const listProjectById = async (req: Request, res: Response) => {
  const projectId = req.params.id;
  
  try {
    const listAll = await findProjectById(projectId);
    return res.status(200).json(listAll);
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

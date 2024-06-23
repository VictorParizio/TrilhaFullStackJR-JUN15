import { findProjectsByUserId } from "@/repositories/project.repositories";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser?: string;
}

export const listAllProject = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const id = req.authenticatedUser;

  try {
    const listAll = await findProjectsByUserId(id);
    return res.status(200).json(listAll);
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

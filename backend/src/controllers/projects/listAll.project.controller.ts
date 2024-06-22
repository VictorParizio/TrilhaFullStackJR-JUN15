import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export const listAllProject = async (req: Request, res: Response) => {
  try {
    const listAll = await prisma.project.findMany();

    return res.status(200).json( listAll );
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

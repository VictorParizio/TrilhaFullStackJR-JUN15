import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const foundProject = await prisma.project.findFirst({ where: { id } });

    if (!foundProject) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    await prisma.project.delete({ where: { id } });
    return res.status(204);
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

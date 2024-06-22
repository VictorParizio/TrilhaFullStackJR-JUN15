import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const foundProject = await prisma.project.findFirst({ where: { id } });

    if (!foundProject) {
      return res.status(404).json({ message: "Projeto não encontrado" });
    }

    await prisma.project.update({
      where: { id },
      data: { title, description },
    });

    return res.status(204).json();
  } catch (error: any) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

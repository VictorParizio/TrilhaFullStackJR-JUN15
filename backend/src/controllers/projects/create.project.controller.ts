import { prisma } from "@/lib/prisma";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser?: string;
}

export const createProject = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { title, description } = req.body;
  const id = req.authenticatedUser;

  if (!id) {
    return res.status(400).json({ message: "Usuário não autenticado" });
  }

  const user = await prisma.user.findFirst({ where: { id } });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        user: {
          connect: {
            id,
          },
        },
      },
    });

    res.status(201).json({
      project: newProject,
      message: "Projeto criado com sucesso",
    });
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    res.status(500).json({ message: "Erro interno ao criar projeto" });
  }
};

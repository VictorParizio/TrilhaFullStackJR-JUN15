import { createNewProject } from "@/repositories/project.repositories";
import { findUserById } from "@/repositories/user.repository";
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

  const user = await findUserById(id);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const data = {
    title,
    description,
    user: {
      connect: {
        id,
      },
    },
  };

  try {
    const newProject = await createNewProject(data);

    res.status(201).json({
      project: newProject,
      message: "Projeto criado com sucesso",
    });
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    res.status(500).json({ message: "Erro interno ao criar projeto" });
  }
};

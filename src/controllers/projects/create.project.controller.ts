import { createNewProject } from "@/repositories/project.repositories";
import { Request, Response } from "express";

interface AuthenticatedRequest extends Request {
  authenticatedUser: string;
}

export const createProject = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { title, description } = req.body;
  const id = req.authenticatedUser;

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

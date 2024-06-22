import { prisma } from "@/lib/prisma";

interface CreateProject {
  title: string;
  description: string;
  user: {
    connect: {
      id: string;
    };
  };
}

export const createNewProject = async (data: CreateProject) => {
  const project = await prisma.project.create({ data });
  return project;
};

export const findProjectsByUserId = async (user_id: string) => {
  const project = await prisma.project.findMany({ where: { user_id } });
  return project;
};

export const findProjectById = async (id: string) => {
  const project = await prisma.project.findUnique({ where: { id } });
  return project;
};

interface UpdateProject {
  id: string;
  data: {
    title: string;
    description: string;
  };
}

export const updateProject = async ({ id, data }: UpdateProject) => {
  const project = await prisma.project.update({
    where: { id },
    data,
  });
  return project;
};

export const removeProject = async (id: string) => {
  const project = await prisma.project.delete({ where: { id } });
  return project;
};

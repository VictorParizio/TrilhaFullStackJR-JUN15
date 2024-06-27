import { prisma } from "@/lib/prisma";

export const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

interface CreateUser {
  name: string
  email: string
  password: string
}

export const createUser = async (data: CreateUser) => {
  const user = await prisma.user.create({ data });
  return user;
};
import { createUser, findUserByEmail } from "@/repositories/user.repository";
import { encryptPassword } from "@/util/encrypt";
import { generateToken } from "@/util/jwt";
import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const foundEmail = await findUserByEmail(email);

    if (foundEmail) {
      return res
        .status(409)
        .json({ message: "Usuário ou Email já Cadastrado" });
    }

    const encryptedPassword = await encryptPassword(password.toString());
    const data = { name, email, password: encryptedPassword };
    const newUser = await createUser(data);
    const { password: _, ...userWithoutPassword } = newUser;
    const access_token = generateToken({ user_id: newUser.id }, "8h");

    return res.status(201).json({
      newUser: userWithoutPassword,
      access_token,
      message: "Usuário cadastrado com sucesso",
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

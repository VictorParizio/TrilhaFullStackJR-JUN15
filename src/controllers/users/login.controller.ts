import { findUserByEmail } from "@/repositories/user.repository";
import { comparePassword } from "@/util/encrypt";
import { generateToken } from "@/util/jwt";
import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Email e/ou senha inválidos" });
    }

    const validPassword = await comparePassword(
      password.toString(),
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({ message: "Email e/ou senha inválidos" });
    }

    const access_token = generateToken({ id: user.id }, "8h");
    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({ user: userWithoutPassword, access_token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

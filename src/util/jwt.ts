import jwt from "jsonwebtoken";

export const generateToken = (data: object, validity: string) => {
  return jwt.sign(data, process.env.PASSWORD_JWT || "", {
    expiresIn: validity,
  });
};

export const checkToken = (token: string) => {
  return jwt.verify(token, process.env.PASSWORD_JWT || "");
};

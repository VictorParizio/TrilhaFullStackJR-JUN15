import { loginUser } from "@/controllers/users/login.controller";
import { registerUser } from "@/controllers/users/register.controller";
import { validateBody } from "@/middlewares/validate.body";
import { userAuthSchema, userRegisterSchema } from "@/schemas/user.schema";
import { Router } from "express";

const route = Router();

route.post("/register", validateBody(userRegisterSchema), registerUser);
route.post("/session", validateBody(userAuthSchema), loginUser);

export default route;

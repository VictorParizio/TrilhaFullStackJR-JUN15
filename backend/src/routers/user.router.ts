import { loginUser } from "@/controllers/users/login.controller";
import { registerUser } from "@/controllers/users/register.controller";
import { validateToken } from "@/middlewares/token";
import { Router } from "express";

const route = Router();

route.post("/register", registerUser);
route.post("/session", loginUser);

route.use(validateToken);

export default route;

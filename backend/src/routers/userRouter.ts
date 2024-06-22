import { loginUser } from "@/controllers/login.controller";
import { registerUser } from "@/controllers/register.controller";
import { validateToken } from "@/middlewares/token";
import { Router } from "express";

const route = Router();

route.post("/register", registerUser);
route.post("/session", loginUser);

route.use(validateToken);

export default route;

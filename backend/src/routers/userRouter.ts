import { loginUser } from "@/controllers/login.controller";
import { registerUser } from "@/controllers/register.controller";
import { Router } from "express";

const route = Router();

route.post("/register", registerUser);
route.post("/session", loginUser);

export default route;

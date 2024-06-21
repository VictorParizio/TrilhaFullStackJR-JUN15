import { registerUser } from "@/controllers/register.controller";
import { Router } from "express";

const route = Router();

route.post("/register", registerUser);

export default route;

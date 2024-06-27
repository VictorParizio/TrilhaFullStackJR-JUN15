import express from "express";
import userRouter from "./user.router";
import projectRouter from "./project.router";
import swagger from "./swagger.router";
import { authorized } from "@/middlewares/authorized";
import { validateToken } from "@/middlewares/token";

export const router = express();

router.use(swagger);
router.use(userRouter);
router.use(validateToken);
router.use(authorized);
router.use(projectRouter);

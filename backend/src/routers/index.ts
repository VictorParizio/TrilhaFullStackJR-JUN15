import express from "express";
import userRouter from "./userRouter";
import projectRouter from "./projectRouter";

export const router = express();

router.use(userRouter);
router.use(projectRouter);

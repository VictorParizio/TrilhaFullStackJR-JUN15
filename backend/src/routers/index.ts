import express from "express";
import userRouter from "./userRouter";

export const router = express();

router.use(userRouter);

import { createProject } from "@/controllers/projects/create.project.controller";
import { Router } from "express";

const route = Router();

route.post("/project", createProject);

export default route;

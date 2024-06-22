import { createProject } from "@/controllers/projects/create.project.controller";
import { updateProject } from "@/controllers/projects/update.project.controller";
import { Router } from "express";

const route = Router();

route.post("/project", createProject);
route.put("/project/:id", updateProject);

export default route;

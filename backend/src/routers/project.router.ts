import { createProject } from "@/controllers/projects/create.project.controller";
import { deleteProject } from "@/controllers/projects/delete.project.controller";
import { listAllProject } from "@/controllers/projects/listAll.project.controller";
import { updateProject } from "@/controllers/projects/update.project.controller";
import { Router } from "express";

const route = Router();

route.post("/project", createProject);
route.put("/project/:id", updateProject);
route.delete("/project/:id", deleteProject);
route.get("/project", listAllProject);

export default route;

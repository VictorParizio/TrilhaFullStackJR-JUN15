import { createProject } from "@/controllers/projects/create.project.controller";
import { deleteProject } from "@/controllers/projects/delete.project.controller";
import { listAllProject } from "@/controllers/projects/listAll.project.controller";
import { updateProject } from "@/controllers/projects/update.project.controller";
import { validateBody } from "@/middlewares/validate.body";
import {
  projectCreateSchema,
  projectUpdateSchema,
} from "@/schemas/project.schema";
import { Router } from "express";

const route = Router();

route.post("/project", validateBody(projectCreateSchema), createProject);
route.put("/project/:id", validateBody(projectUpdateSchema), updateProject);
route.delete("/project/:id", deleteProject);
route.get("/project", listAllProject);

export default route;

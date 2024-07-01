import { Router } from "express";
import { createProject } from "@/controllers/projects/create.project.controller";
import { deleteProject } from "@/controllers/projects/delete.project.controller";
import { listAllProject } from "@/controllers/projects/list.all.project.controller";
import { listProjectById } from "@/controllers/projects/list.project.by.id";
import { updateProject } from "@/controllers/projects/update.project.controller";
import { authorized } from "@/middlewares/authorized";
import { validateBody } from "@/middlewares/validate.body";
import {
  projectCreateSchema,
  projectUpdateSchema,
} from "@/schemas/project.schema";

const route = Router();

route.post("/project", validateBody(projectCreateSchema), createProject);
route.get("/project", listAllProject);

route.get("/project/:id", authorized, listProjectById);
route.delete("/project/:id", authorized, deleteProject);
route.put(
  "/project/:id",
  authorized,
  validateBody(projectUpdateSchema),
  updateProject
);

export default route;

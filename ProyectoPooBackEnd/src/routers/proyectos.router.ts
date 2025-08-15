import { Router } from "express";
import { crearProyecto, listarProyectos } from "../controllers/proyectos.controller";

const router = Router();

router.post("/proyectos", crearProyecto);
router.get("/proyectos/:idPropietario", listarProyectos);

export default router;

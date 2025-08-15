import { Router } from "express";
import { inicioSesion, registro } from "../controllers/usuarios.controller";

const router = Router();

// RUTAS MINIMAS → cada endpoint llama a una función del controlador
router.post("/registro", registro);
router.post("/inicioSesion", inicioSesion);

export default router;

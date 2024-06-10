// profesoresRoute.js

import { Router } from "express";
import ProfesorController from '../controllers/profesoresController.js';

const profesorRouter = Router();

// Ruta para obtener todos los profesores
profesorRouter.get('/', ProfesorController.obtenerProfesores);

export default profesorRouter;

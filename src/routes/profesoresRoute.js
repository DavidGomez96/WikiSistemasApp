// profesoresRoute.js

import { Router } from 'express';
import ProfesorController from '../controllers/profesoresController.js';

const profesorRouter = Router();

profesorRouter.get('/', ProfesorController.obtenerProfesores);
profesorRouter.get('/:id/materias', ProfesorController.obtenerMateriasPorProfesor); // Nueva ruta

export default profesorRouter;

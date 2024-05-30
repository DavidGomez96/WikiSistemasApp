import { Router } from "express";
import RecursoController from "../controllers/recursosController.js";

export const recursoRouter = Router();

// obtener todos los recursoss
recursoRouter.get('/materias/:materias_id', RecursoController.getAllRecursos);
// obtener los recursos segun la materia a la que pertenezcan
recursoRouter.get('/:materia_id', RecursoController.getRecursosByMateria);

// Crear un recurso
recursoRouter.post('/recursos', RecursoController.createRecurso);

// Actualizar un recurso
recursoRouter.put('/:id', RecursoController.updateRecurso);

// Eliminar un recurso
recursoRouter.delete('/:id', RecursoController.deleteRecurso);

export default recursoRouter;
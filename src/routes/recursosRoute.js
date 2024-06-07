import { Router } from "express";
import RecursoController from "../controllers/recursosController.js";

export const recursosRouter = Router();

// obtener todos los recursoss
recursosRouter.get('/materias/:materias_id', RecursoController.getAllRecursos);
// obtener los recursos segun la materia a la que pertenezcan
recursosRouter.get('/:materia_id', RecursoController.getRecursosByMateria);

// Crear un recurso
recursosRouter.post('/', RecursoController.createRecurso);

// Actualizar un recurso
recursosRouter.put('/:id', RecursoController.updateRecurso);

// Eliminar un recurso
recursosRouter.delete('/:id', RecursoController.deleteRecurso);

export default recursosRouter;
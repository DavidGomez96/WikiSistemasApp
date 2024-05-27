import { Router } from "express";
import RecursoController from "../controllers/recursosController";

export const recursoRouter = Router();

// obtener los recursos segun la materia a la que pertenezcan
recursoRouter.get('/:materia_id', RecursoController.getRecursosByMateria);
// obtener todos los recursoss
recursoRouter.get('/', RecursoController.getAllRecursos);

// Crear un recurso
recursoRouter.post('/recursos', RecursoController.createRecurso);

// Actualizar un recurso
recursoRouter.put('/:id', RecursoController.updateRecurso);

// Eliminar un recurso
recursoRouter.delete('/:id', RecursoController.deleteRecurso);

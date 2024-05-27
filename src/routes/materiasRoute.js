import { Router } from "express";
import MateriaController from "../controllers/materiasController";

export const materiaRouter = Router();

// Obtener todas las materia por semestre
materiaRouter.get('/semestre_id', MateriaController.getMateriaBySemestre);
// Obtener materia por Id
materiaRouter.get('/:id', MateriaController.getMateriaById);

// Crear materia
materiaRouter.post('/materias', MateriaController.createMateria);

// Actualizar materia
materiaRouter.put('/:id', MateriaController.updateMateria);

// Eliminar materia
materiaRouter.delete('/:id', MateriaController.deleteMateria);

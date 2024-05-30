import { Router } from "express";
import MateriaController from "../controllers/materiasController.js";

export const materiaRouter = Router();

// Obtener todas las materias por semestre
materiaRouter.get('/semestre/:semestre_id', MateriaController.getMateriaBySemestre);

// Obtener materia por Id
materiaRouter.get('/:id', MateriaController.getMateriaById);

// Crear materia
materiaRouter.post('/materias', MateriaController.createMateria);

// Actualizar materia
materiaRouter.put('/:id', MateriaController.updateMateria);

// Eliminar materia
materiaRouter.delete('/:id', MateriaController.deleteMateria);


export default materiaRouter;
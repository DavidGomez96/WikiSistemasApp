import { Router } from "express";
import TaskController from "../controllers/taskController.js";

export const taskRouter = Router();

// Obtener todas las tareas
taskRouter.get('/', TaskController.getAllTasks);

// Obtener tareas por usuario_id
taskRouter.get('/user/:usuario_id', TaskController.getTasksByUserId);

// Crear tarea
taskRouter.post('/', TaskController.createTask);

// Actualizar tarea
taskRouter.put('/:id', TaskController.updateTask);

// Eliminar tarea
taskRouter.delete('/:id', TaskController.deleteTask);

export default taskRouter;

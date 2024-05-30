import { Router } from "express"
;import ComentarioController from "../controllers/comentarioController.js";

export const comentarioRouter = Router();

// obtener todos los comentarios
comentarioRouter.get('/', ComentarioController.getAllComentarios);

// Crear comentario
comentarioRouter.post('/comentarios', ComentarioController.createComentario);

// Actualizar comentario
comentarioRouter.put('/:id', ComentarioController.updateComentario);

// Borrar un comnetario
comentarioRouter.delete('/:id', ComentarioController.deleteComentario);

export default comentarioRouter;
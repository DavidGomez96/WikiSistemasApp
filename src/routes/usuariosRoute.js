import { Router } from "express";
import UsuarioController from "../controllers/usuariosController.js";

export const usuarioRouter = Router();

// Obtener todos los usuarios
usuarioRouter.get('/usuarios', UsuarioController.getAllUsuarios);
// Obtener usuario por el id
usuarioRouter.get('/:id', UsuarioController.getUsuarioById);

//Crear usuario
usuarioRouter.post('/usuarios', UsuarioController.createUsuario);

// Actualizar usuario
usuarioRouter.patch('/:id', UsuarioController.updateUsuario);

// Eliminar usuario
usuarioRouter.delete('/:id', UsuarioController.deleteUsuario);

export default usuarioRouter;
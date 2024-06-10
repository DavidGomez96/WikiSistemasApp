// profesoresController.js

import { Profesor } from "../models/index.js";

// Controlador para obtener todos los profesores
export class ProfesorController{


    static async obtenerProfesores (req, res){
    try {
        const profesores = await Profesor.findAll();
        res.json(profesores);
    } catch (error) {
        console.error('Error al obtener los profesores:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
    };
}

export default ProfesorController;

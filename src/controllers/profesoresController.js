// profesoresController.js

import { Profesor, Materia, MateriaXProfesor } from "../models/index.js";

export class ProfesorController {
    static async obtenerProfesores(req, res) {
        try {
            const profesores = await Profesor.findAll();
            res.json(profesores);
        } catch (error) {
            console.error('Error al obtener los profesores:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }

    static async obtenerMateriasPorProfesor(req, res) {
        try {
            const { id } = req.params;
            const materias = await Materia.findAll({
                include: [{
                    model: MateriaXProfesor,
                    where: { profesor_id: id },
                    attributes: []
                }]
            });
            res.json(materias);
        } catch (error) {
            console.error('Error al obtener las materias del profesor:', error);
            res.status(500).json({ mensaje: 'Error interno del servidor' });
        }
    }
}

export default ProfesorController;

// import Materia from '../models/materiasModel.js';
// import Materia from '../models/materiasModel.js';
// import Recurso from '../models/recursosModel.js';
import { Materia, Recurso } from "../models/index.js";


export class RecursoController {
  
  static async getRecursosByMateria (req, res)  {
    try {
      const { materia_id } = req.params;
      const recursos = await Materia.findAll({
        where: { materia_id },
        includes: [Materia]
      });
      res.json(recursos);
    } catch (error){
      res.status(400),json({ error: error.message })
    }
  };
  
  static async getAllRecursos (req, res) {
    console.log('recurso por id bien')
    try {
      const recursos = await Recurso.findAll({
        // attributes: ['*'],
        includes: [Materia]
      });
      res.json(recursos);

    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  };
  
  static async createRecurso (req, res) {
    try{
      const { nombre, descripcion, url, materia_id, tipo_recurso_id } = req.body;
      const newRecurso = await Recurso.create({ nombre, descripcion, url, materia_id, tipo_recurso_id });
      res.json(newRecurso);
    }catch (error) {
      res.status(400).json({ error: error.message })
    }
  };
  
  static async updateRecurso (req, res) {
    try{
      const { id } = req.params;
      const { nombre, descripcion, url, materia_id, tipo_recurso_id } = req.body;
      await Recurso.update({ nombre, descripcion, url, materia_id, tipo_recurso_id }, { 
        where: { recurso_id: id }
      })
      res.json({ message: 'Recurso Actualizado' })
    }catch(error){
      res.status(400).json({ error: error.message })
    }
  };
  
  static async deleteRecurso (req, res) {
    try {
      const { id } = req.params;
      await Recurso.destroy({
        where: { recurso_id: id }
      });
      res.json({ message: 'Recurso eliminado' })
    }catch (error) {
      res.status(400).json({ error: error.message })
    }
  };
  
};

export default RecursoController;

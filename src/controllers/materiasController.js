import Materia from '../models/materiasModel.js';
import Semestre from '../models/semestresModel.js';

export class MateriaController {
  
  static async getMateriaBySemestre(req, res) {
    try {
      const { semestre_id } = req.params;
      const materias = await Materia.findAll({
        where: { semestre_id },
        include: Semestre,
      });
      res.json(materias);
      // return res.status(200).send(materias)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async getMateriaById(req, res) {
    try {
      const { id } = req.params;
      const materia = await Materia.findByPk(id, {
        include: [Semestre],
      });
      if (materia) {
        res.json(materia);
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createMateria(req, res) {
    try {
      const { nombre, semestre_id } = req.body;
      const nuevaMateria = await Materia.create({ nombre, semestre_id });
      res.json(nuevaMateria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateMateria(req, res) {
    try {
      const { id } = req.params;
      const { nombre, semestre_id } = req.body;
      const [updated] = await Materia.update({ nombre, semestre_id }, {
        where: { id }
      });
      if (updated) {
        res.json({ message: 'Materia Actualizada' });
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteMateria(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Materia.destroy({
        where: { id }
      });
      if (deleted) {
        res.json({ message: 'Materia eliminada' });
      } else {
        res.status(404).json({ error: 'Materia no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default MateriaController;

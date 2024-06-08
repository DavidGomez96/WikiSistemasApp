import { Comentario, Usuario } from "../models/index.js";

export class ComentarioController {
  
  static async getAllComentarios(req, res) {
    try {
      const comentarios = await Comentario.findAll({
        include: Usuario // Cambié "includes" a "include" y quité los corchetes
      });
      res.json(comentarios);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static async createComentario(req, res) {
    try {
      const { descripcion, usuario_id } = req.body;
      const newComentario = await Comentario.create({ descripcion, usuario_id });
      res.json(newComentario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static async updateComentario(req, res) {
    try {
      const { id } = req.params;
      const { descripcion, usuario_id } = req.body;
      const comentario = await Comentario.findByPk(id);
      if (!comentario) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
      }
      if (comentario.usuario_id !== usuario_id) {
        return res.status(403).json({ error: 'No autorizado para actualizar este comentario' });
      }
      comentario.descripcion = descripcion;
      await comentario.save();

      res.json(comentario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteComentario(req, res) {
    console.log("Llegue")
    try {
      const { id } = req.params;
      const { usuario_id } = req.body;
      const comentario = await Comentario.findByPk(id);
      if (!comentario) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
      }
      // if (comentario.usuario_id !== usuario_id) {
      //   return res.status(403).json({ error: 'No autorizado para eliminar este comentario' });
      // } descomentamos despues
      await comentario.destroy();
      res.json({ message: 'Comentario eliminado correctamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default ComentarioController;

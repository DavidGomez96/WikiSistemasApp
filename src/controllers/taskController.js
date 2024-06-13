import { Task, Usuario } from "../models/index.js";

export class TaskController {

  static async getAllTasks(req, res) {
    try {
      const tasks = await Task.findAll({
        include: Usuario
      });
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getTasksByUserId(req, res) {
    try {
      const { usuario_id } = req.params;
      const tasks = await Task.findAll({ where: { usuario_id } });
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async createTask(req, res) {
    try {
      const { descripcion, fecha, usuario_id } = req.body;
      const newTask = await Task.create({ descripcion, fecha, usuario_id });
      res.json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { descripcion, fecha, usuario_id } = req.body;
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      if (task.usuario_id !== usuario_id) {
        return res.status(403).json({ error: 'No autorizado para actualizar esta tarea' });
      }
      task.descripcion = descripcion;
      task.fecha = fecha;
      await task.save();

      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const { usuario_id } = req.body; // Asegúrate de que req.body contiene usuario_id
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      if (task.usuario_id !== usuario_id) {
        return res.status(403).json({ error: 'No autorizado para eliminar esta tarea' });
      }
      await task.destroy();
      res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
}

export default TaskController;

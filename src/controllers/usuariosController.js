import Usuario from '../models/usuariosModel.js'

export class UsuarioController {
  
  static async getAllUsuarios (req, res) {
    try{
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    }catch (error){
      res.status(400).json({ error: error.message });
    }
  }

  static async getUsuarioById (req, res) {
    try{
      const { id } = req.params;
      const usuario = await Usuario.findByPK(id);
      if (usuario) {
        res.json(usuario);
      }else {
        res.status(400).json({ message: 'Usuario no encontrado' })
      }
    }catch (error){
      res.status(400).json({ error: error.message });
    }
  }

  static async createUsuario (req, res) {
    try{
      const { nombre, correo, contrasena, fecha_nacimiento, rol_id } = req.body;
      const nuevoUsuario = await Usuario.create({ nombre, correo, contrasena, fecha_nacimiento, rol_id });
      res.json(nuevoUsuario);
    }catch (error){
      res.status(400).json({ error: error.message });
    }
  }

  static async updateUsuario (req, res) {
    try{
      const { id } = req.params;
      const { nombre, correo, fecha_nacimiento, rol_id } = req.params;
      await Usuario.update({ nombre, correo, fecha_nacimiento, rol_id }, {
        where: { id }
      })
      res.json({ message: 'Usuario actualizado' });
    }catch (error){
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteUsuario (req, res) {
    try{
      const { id } = req.params;
      await Usuario.destroy({
        where: { id }
      });
      res.json({ message: 'Usuario eliminado' })
    }catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
};

export default UsuarioController;

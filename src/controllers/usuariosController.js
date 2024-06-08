// import Usuario from '../models/usuariosModel.js'
import {Usuario} from '../models/index.js'
import bcrypt from "bcrypt"

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
      const { nombre, correo, contrasena, rol_id } = req.body;
      const usuario = await Usuario.findOne({ where: { correo } });
      if (usuario) {
        return res.status(409).json({ message: 'Correo ya registrado', status:409 });
      }
      const nuevoUsuario = await Usuario.create({ nombre, correo, contrasena, rol_id:1 });
      res.json({usuario:nuevoUsuario,status:200});
    }catch (error){
      res.status(400).json({ error: error.message });
    }
  }

  static async updateUsuario (req, res) {
    try{
      const { id } = req.params;
      const { nombre, correo, rol_id } = req.body;
      await Usuario.update({ nombre, correo, rol_id }, {
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

  static async login (req,res){
    const { correo, contrasena } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { correo } });

      if (!usuario) {
        return res.status(401).json({ message: 'Correo o contraseña incorrectos', status:401 });
      }
      const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

      if (!isMatch) {
        return res.status(401).json({ message: 'Correo o contraseña incorrectos',status:401 });
      }

      return res.json({ 
        message: 'Login exitoso',
        status:200, 
        usuario 
      });
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error del servidor',status:500 });
    }
  }



};

export default UsuarioController;

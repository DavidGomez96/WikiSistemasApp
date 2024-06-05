import Usuario from '../models/usuarioModel.js';
import bcrypt from 'bcrypt';

const AuthController = {
  login: async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { correo } });

      if (!usuario) {
        return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
      }

      const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

      if (!isMatch) {
        return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
      }

      return res.json({ message: 'Login exitoso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error del servidor' });
    }
  }
};

export default AuthController;

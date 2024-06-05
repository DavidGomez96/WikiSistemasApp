import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Rol from './rolesModel.js';

const Usuario = sequelize.define('Usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Rol,
      key: 'rol_id'
    }
  }
}, {
  tableName: 'tbl_usuarios',
  timestamps: false,

  hooks: {
    beforeCreate: async (usuario) => {
      if (usuario.contrasena) {
        const salt = await bcrypt.genSalt(10);
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
      }
    },
    beforeUpdate: async (usuario) => {
      if (usuario.changed('contrasena')) {
        const salt = await bcrypt.genSalt(10);
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
      }
    }
  }
});

export default Usuario;

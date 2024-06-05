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
});

export default Usuario;

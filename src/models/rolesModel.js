import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const Rol = sequelize.define('Rol', {
  rol_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tbl_roles',
  timestamps: false,
});

export default Rol;

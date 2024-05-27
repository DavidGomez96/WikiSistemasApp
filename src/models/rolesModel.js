import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Rol = sequelize.define('roles', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: 'tbl_roles',
  timestamps: false,
});

export default Rol;
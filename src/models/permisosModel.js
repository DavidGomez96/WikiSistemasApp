import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Permiso = sequelize.define('permiso', {
  nombre: {
    type: DataTypes.STRING,
    allownull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allownull: false,
    unique: true
  }
},
{
  tableName: 'tbl_roles',
  timestamps: false
}
)

export default Permiso;
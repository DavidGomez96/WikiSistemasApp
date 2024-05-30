import { Permiso } from './permisosModel';
import { Rol } from './rolesModel';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db';

export const RolXPermiso = sequelize.define('rolesXpermisos', {
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Rol,
      key: 'id'
    }
  },
  permiso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permiso,
      key: 'id'
    }
  }
},
{
  tableName: 'tbl_rolesXpermisos',
  timestamps: false
})

export default RolXPermiso;
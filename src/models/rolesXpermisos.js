import { Permiso } from './permisosModel';
import { Rol } from './rolesModel';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db';

export const RolXPermiso = sequelize.define('rolesXpermisos', {
  rolId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Rol,
      key: 'id'
    }
  },
  permisoId: {
    type: DataTypes.STRING,
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
import { Materia } from './materiasModel.js';
import { Usuario } from './usuariosModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const UsuarioXMateria = sequelize.define('usuarioXmateria', {
  usuarioId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  materiaId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
      model: Materia,
      key: 'id'
    }
  }
},
{
  tableName: 'tbl_usuariosXmaterias',
  timestamps: false
});

export default  UsuarioXMateria;
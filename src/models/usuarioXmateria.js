import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Usuario from './usuariosModel.js';
import Materia from './materiasModel.js';

const UsuarioXMateria = sequelize.define('UsuarioXMateria', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  },
  materia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Materia,
      key: 'materia_id'
    }
  }
}, {
  tableName: 'tbl_usuariosXmaterias',
  timestamps: false
});

export default UsuarioXMateria;

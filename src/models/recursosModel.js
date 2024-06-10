import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Materia from './materiasModel.js';
import TipoRecurso from './tipoRecursosModel.js';

const Recurso = sequelize.define('Recurso', {
  recurso_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  materia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Materia,
      key: 'materia_id'
    },
  },
  tipo_recurso_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TipoRecurso,
      key: 'tipo_recurso_id'
    },
  }
}, {
  tableName: 'tbl_recursos',
  timestamps: false,
});

export default Recurso;


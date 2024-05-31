import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Semestre from './semestresModel.js';

const Materia = sequelize.define('Materia', {
  materia_id: {
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
    allowNull: false,
    unique: true
  },
  codigo: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true
  },
  creditos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  semestre_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Semestre,
      key: 'semestre_id'
    },
  }
}, {
  tableName: 'tbl_materias',
  timestamps: false,
});

export default Materia;

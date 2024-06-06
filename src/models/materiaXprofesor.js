import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Materia from './materiasModel.js';
import Profesor from './profesoresModel.js';

const MateriaXProfesor = sequelize.define('MateriaXProfesor', {
  materia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Materia,
      key: 'materia_id'
    },
  },
  profesor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Profesor,
      key: 'profesor_id'
    },
  }
}, {
  tableName: 'tbl_materiaXprofesor',
  timestamps: false
});

export default MateriaXProfesor;

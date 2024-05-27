import { Materia } from './materiasModel';
import { Profesor } from './profesoresModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const MateriaXProfesor = sequelize.define('materiaXprofesor', {
  materia_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Materia,
      key: 'id'
    }
  },
  profesor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Profesor,
      key: 'id'
    }
  }
},
{
  tableName: 'tbl_materiaXprofesor',
  timestanps: false
});

export default MateriaXProfesor;
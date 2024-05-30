import Materia from './materiasModel';
import Profesor from './profesoresModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class MateriaXProfesorModel {
  constructor() {
    this.MateriaXProfesor = this._defineModel();
  };

  _defineModel() {
    return sequelize.define('materiaXprofesor', {
      materia_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Materia,
          key: 'materia_id'
        },
        field: 'materia_id'
      },
      profesor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Profesor,
          key: 'profesor_id'
        },
        field: 'profesor_id'
      }
    }, {
      tableName: 'tbl_materiaXprofesor',
      timestanps: false
    });
  };

  getModel() {
    return this.MateriaXProfesor;
  }
};

const MateriaXProfesorInstance = new MateriaXProfesorModel();
const MateriaXProfesor = MateriaXProfesorInstance.getModel();

export default MateriaXProfesor;
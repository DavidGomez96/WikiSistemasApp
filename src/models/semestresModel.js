import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class SemestreModel {
  constructor() {
    this.Semestre = this._defineModel();
    this._asociateModel();
  }

  _defineModel() {
    return sequelize.define('Semestre', {
      semestre_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'tbl_semestres',
      timestamps: false,
    });
  };

  _asociateModel() {
    
  }

  getModel() {
    return this.Semestre;
  }

};

const SemestreInstance = new SemestreModel();
const Semestre = SemestreInstance.getModel();

export default Semestre;
import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Semestre from './semestresModel.js';

class MateriaModel {
  constructor() {
    this.Materia = this._defineModel();
    this._associateModels();
  }

  _defineModel() {
    return sequelize.define('Materia', {
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
        field: 'semestre_id',
      }
    }, {
      tableName: 'tbl_materias',
      timestamps: false,
    });
  };

  _associateModels() {
    this.Materia.belongsTo(Semestre, { 
      foreignKey: 'semestre_id', 
      onDelete: 'CASCADE' 
    });
    
      Semestre.hasMany(this.Materia, { 
      foreignKey: 'materia_id', 
      as: 'materias'
    });
  }

  getModel() {
    return this.Materia;
  }
};

const MateriaInstance = new MateriaModel();
const Materia = MateriaInstance.getModel();

export default Materia;
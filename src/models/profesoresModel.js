import { DataTypes } from 'sequelize';
import sequelize from "../../config/db.js";

class ProfesorMolde {
  constructor() {
    this.Profesor = this._defineModel();
    this._associateModels();
  }

  _defineModel(){
    return sequelize.define('Profesor',{
      profesor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        anique: true
      },
      corre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      departamento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'tbl_profesores',
      timestamps: false
    });
  };
  getModel() {
    return this.Profesor;
  }
};

const ProfesorInstance = new ProfesorMolde();
const Profesor = ProfesorInstance.getModel();

export default Profesor;

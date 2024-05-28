// import { DataTypes } from "sequelize";
// import sequelize from "../src/database.js";
// import { Materia } from "./materiasModel.js";
import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Semestre = sequelize.define('semestre', {
  semestre_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  tableName: 'tbl_semestres',
  timestamps: false,
});

// Semestre.hasMany(Materia, { as: 'materias' })

// sequelize.sync().then(() => {
//   console.log('semestre bien')
// }).catch((error) => {
//   console.log('error en semestre')
// })

export default Semestre;
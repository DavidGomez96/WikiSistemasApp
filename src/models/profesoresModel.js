import { DataTypes } from 'sequelize';
import sequelize from "../../config/db.js";

export const Profesor = sequelize.define('profesor', {
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
},
{
  tableName: 'tbl_profesores',
  timestamps: false
});

export default Profesor;

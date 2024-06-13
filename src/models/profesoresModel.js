import { DataTypes } from 'sequelize';
import sequelize from "../../config/db.js";

const Profesor = sequelize.define('Profesor', {
  profesor_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false // Eliminar la restricción de unicidad en el campo departamento
  }
}, {
  tableName: 'tbl_profesores',
  timestamps: false
});

export default Profesor;


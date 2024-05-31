import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const Semestre = sequelize.define('Semestre', {
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

export default Semestre;

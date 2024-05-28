import { Semestre } from './semestresModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Materia = sequelize.define('materia', {
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
      key: 'id'
    }
  }
},
{
  tableName: 'tbl_materias',
  timestamps: false,
});

  //! relacionado con semestre HACER RELACION
  
// Materia.belongsTo(Semestre);

// Materia.belongsTo(Semestre, {foreignKey: 'semestreId', as: 'semestre'})

// sequelize.sync().then(() => {
//   console.log('materia bien')
// }).catch((error) => {
//   console.log('error en semestre')
// })

export default Materia;
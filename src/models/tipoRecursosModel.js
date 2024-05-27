import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const TipoRecurso = sequelize.define('tipoRecurso', {
  nombre: {
    type: DataTypes.STRING,
    allowNul: false
  }
},
{
  tableName: 'tbl_tipo_recurso',
  timestamps: false,
});

export default TipoRecurso;
import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

const TipoRecurso = sequelize.define('TipoRecurso', {
  tipo_recurso_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tbl_tipo_recurso',
  timestamps: false,
});

export default TipoRecurso;
import { Materia } from './materiasModel.js';
import { TipoRecurso } from './tipoRecursosModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Recurso = sequelize.define('recurso', {
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
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  materiaId: {
    type: DataTypes.STRING,
    allowNull: false,
    reference: {
      model: Materia,
      key: 'id'
    }
  },
  tipoRecursoId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: TipoRecurso,
      key: 'id'
    }
  }
},
{
  tableName: 'tbl_recursos',
  timestamps: false,
});

export default Recurso;
//! relacionado con dos materia y tipo_de_recurso HACER RELACION

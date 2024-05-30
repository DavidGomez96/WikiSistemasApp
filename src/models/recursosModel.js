import Materia from './materiasModel.js';
import TipoRecurso from './tipoRecursosModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class RecursoModel {
  constructor() {
    this.Recurso = this._defineModel();
    this._associateModel();
  }

  _defineModel() {
    return sequelize.define('recurso', {
      recurso_id: {
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
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      materia_id: {
        type: DataTypes.STRING,
        allowNull: false,
        reference: {
          model: Materia,
          key: 'materia_id'
        },
        field: 'materia_id'
      },
      tipo_recurso_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: TipoRecurso,
          key: 'tipo_recurso_id'
        },
        field: 'tipo_recurso_id'
      }
    }, {
      tableName: 'tbl_recursos',
      timestamps: false,
    });
  };

  _associateModel() {
    this.Recurso.belongsTo(Materia, {
      foreignkey: 'materia_id',
      onDelete: 'CASCADE'
    });

    this.Recurso.belongsTo(TipoRecurso, {
      foreignkey: 'tipo_recurso_id',
      onDelete: 'CASCADE'
    });

    Materia.hasMany(this.Recurso, {
      foreignkey: 'recurso_id',
      as: 'recursos'
    })
  };

  getModel() {
    return this.Recurso;
  }

};

const RecursoInstance = new RecursoModel();
const Recurso = RecursoInstance.getModel();

export default Recurso;
//! relacionado con dos materia y tipo_de_recurso HACER RELACION

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';


class TipoRecursoModel {
  constructor() {
    this.TipoRecurso = this._difeneModel();
  }

  _difeneModel() {
    return sequelize.define('TipoRecurso', {
      tipo_recurso_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNul: false
      }
    }, {
      tableName: 'tbl_tipo_recurso',
      timestamps: false,
    });
  };
  
  getModel() {
    return this.TipoRecurso;
  }
};

const TipoRecursoInstance = new TipoRecursoModel();
const TipoRecurso = TipoRecursoInstance.getModel();

export default TipoRecurso;
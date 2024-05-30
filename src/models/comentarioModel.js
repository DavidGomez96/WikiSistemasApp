import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";
import Usuario from "./usuariosModel.js";

class ComentarioModel {
  constructor() {
    this.Comentario = this._defineModel();
    this._associateModel();
  }

  _defineModel() {
    return sequelize.define('comentario', {
      comentario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Usuario,
          key: 'usuario_id'
        },
        field: 'materia_id'
      }
    }, {
      tableName: 'tbl_comentario',
      timestamps: false,
    }
  )
  };

  _associateModel() {
    this.Comentario.belongsTo(Usuario, {
      foreignKey: 'usuario_id',
      onDelete: 'CASCADE'
    })
  };

  getModel() {
    return this.Comentario;
  }
};

const ComentarioInstance = new ComentarioModel();
const Comentario = ComentarioInstance.getModel();

export default Comentario;
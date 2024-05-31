import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";
import Usuario from "./usuariosModel.js";

const Comentario = sequelize.define('Comentario', {
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
    references: {
      model: Usuario,
      key: 'usuario_id'
    },
  }
}, {
  tableName: 'tbl_comentario',
  timestamps: false,
});

export default Comentario;

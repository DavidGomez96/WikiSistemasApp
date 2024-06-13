import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";
import Usuario from "./usuariosModel.js";

const Task = sequelize.define('Task', {
  task_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
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
  tableName: 'tbl_task',
  timestamps: false,
});

export default Task;

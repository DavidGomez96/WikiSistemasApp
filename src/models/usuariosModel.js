import Rol from './rolesModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class UsuarioModel{
  constructor() {
    this.Usuario = this._defineModel();
    this._associateModels();
  }

  _defineModel() {
    return sequelize.define('Usuario', {
      usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Rol,
          key: 'rol_id'
        }
      }, 
    }, {
      tableName: 'tbl_usuarios',
      timestamps: false,
    })
  };

  _associateModels() {
    this.Usuario.belongsTo(Rol, {
      foreignKey: 'rol_id', 
      onDelete: 'CASCADE'})
  }

  getModel() {
    return this.Usuario;
  }
}

const UsuarioInstance = new UsuarioModel();
const Usuario = UsuarioInstance.getModel();

export default Usuario;
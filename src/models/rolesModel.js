import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class RolModel {
  constructor() {
    this.Rol = this._defineModel();
  }

  _defineModel () {
    return sequelize.define('roles', {
      rol_id: {
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
        allowNull: false
      }
    }, {
      tableName: 'tbl_roles',
      timestamps: false,
    });
  };

  getModel() {
    return this.Rol;
  }

};

const RolInstance = new RolModel();
const Rol = RolInstance.getModel();

export default Rol;
import { Materia } from './materiasModel.js';
import { Usuario } from './usuariosModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

class UsuarioXMateriaModel {
  constructor() {
    this.UsuarioXMateria = this._defineModel();
  };

  _defineModel() {
    return sequelize.define('usuarioXmateria', {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: Usuario,
          key: 'id'
        }
      },
      materia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: Materia,
          key: 'id'
        }
      }
    }, {
      tableName: 'tbl_usuariosXmaterias',
      timestamps: false
    });
  };

  getModel() {
    return this.UsuarioXMateria;
  }
};

const UsuarioXMateriaInstance = new UsuarioXMateriaModel();
const UsuarioXMateria = UsuarioXMateriaInstance()

export default  UsuarioXMateria;
import { Roles } from './rolesModel.js';

import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

export const Usuario = sequelize.define('usuario', {
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
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rolesId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Roles,
      key: 'id'
    }
  }, 
},
{
  tableName: 'tbl_usuarios',
  timestamps: false,
});

//! relacionada con rol HACER RELACION


export default Usuario;
// import conexion from "../config.js";

// export class usuariosModel {

//   static async getAll({ semestre }){

//   }

//   static async getById({ id }){

//   }

//   static async create ({ input }){

//   }

//   static async delete ({ id }){

//   }

//   static async update ({ id }){

//   }
// }
// import sequelize from "../src/database.js";
// import { Materia } from "./materiasModel.js";
// import { Semestre } from "./semestresModel.js";

// Materia.belongsTo(Semestre, {foreignKey: 'semestreId', as: 'semestre'})
// Semestre.hasMany(Materia, { as: 'materias' })

// Materia.sync()
// Semestre.sync()

import { sequelize, DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';

// importacion de modelos
import { Usuario } from './usuariosModel.js';
import { Rol } from './rolesModel.js';
import { Semestre } from './semestresModel.js';
import { Materia } from './materiasModel.js';
import { Recurso } from './recursosModel.js';
import { TipoRecurso } from './tipoRecursosModel.js';
import { UsuarioXMateria } from './usuarioXmateria.js';
import { Permiso } from './permisosModel.js';
import { RolXPermiso } from './rolesXpermisos.js';


// Relaciones entre los modelos (tablas)

// Un usuario tiene un solo rol
Usuario.belongsTo(Rol, { foreignkey: 'rol_id' });

// Un rol puede pertenecer a muchos Usuarios
Rol.hasMany(Usuario, { foreignKey: 'usuario_id' });

// Una materia pertenece a un semestre
Materia.belongsTo(Semestre, { foreignKey: 'semestre_id' });
// Una materia tiene muchos recursos
Materia.hasMany(Recurso, { foreignKey: 'recurso_id' });

// Un recurso pertenece a una materia
Recurso.belongsTo(Materia, { foreignKey: 'materia_id' });
// Un recurso tiene un tipo de recurso
Recurso.belongsTo(TipoRecurso, { foreignKey: 'tipo_recurso_id' })


// Un tipo de recuroso tiene muchos recursos asociados
TipoRecurso.hasMany(Recurso, { foreignKey: 'recurso_id' })

// Materia tiene muchos Usuarios a través de UsuarioXMateria
Materia.belongsToMany(Usuario, { through: UsuarioXMateria, foreignKey: 'materia_id' });
Usuario.belongsToMany(Materia, { through: UsuarioXMateria, foreignKey: 'usuario_id' });

// Rol tiene muchos Permisos a través de RolXPermiso
Rol.belongsToMany(Permiso, { through: RolXPermiso, foreignKey: 'rol_id'});
Permiso.belongsToMany(Rol, {through: RolXPermiso, foreignKey: 'permiso_id'});

export default {
  sequelize,
  Usuario,
  Semestre,
  Rol,
  Permiso,
  TipoRecurso,
  Profesor,
  Materia,
  Recurso,
  MateriaXProfesor,
  UsuarioXMateria,
  RolXPermiso
};

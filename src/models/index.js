import sequelize from '../../config/db.js';
import Usuario from './usuariosModel.js';
import Rol from './rolesModel.js';
import Comentario from './comentarioModel.js';
import Materia from './materiasModel.js';
import Semestre from './semestresModel.js';
import MateriaXProfesor from './materiaXprofesor.js';
import Profesor from './profesoresModel.js';
import Recurso from './recursosModel.js';
import TipoRecurso from './tipoRecursosModel.js';
import UsuarioXMateria from './usuarioXmateria.js';
import Task from './taskModel.js'; // Importar el modelo Task
import { Sequelize } from 'sequelize';

// Relaciones
Usuario.belongsTo(Rol, {
    foreignKey: 'rol_id',
    onDelete: 'CASCADE'
});
Rol.hasMany(Usuario, {
    foreignKey: 'rol_id'
});

Usuario.hasMany(Comentario, {
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE'
});
Comentario.belongsTo(Usuario, {
    foreignKey: 'usuario_id'
});

Usuario.hasMany(UsuarioXMateria, {
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE'
});
UsuarioXMateria.belongsTo(Usuario, {
    foreignKey: 'usuario_id'
});

Materia.hasMany(UsuarioXMateria, {
    foreignKey: 'materia_id',
    onDelete: 'CASCADE'
});
UsuarioXMateria.belongsTo(Materia, {
    foreignKey: 'materia_id'
});

Materia.belongsTo(Semestre, {
    foreignKey: 'semestre_id',
    onDelete: 'CASCADE'
});
Semestre.hasMany(Materia, {
    foreignKey: 'semestre_id',
    as: 'materias'
});





Materia.hasMany(MateriaXProfesor, {
    onDelete: 'CASCADE',
    foreignKey: 'materia_id'
});


Profesor.hasMany(MateriaXProfesor, {
    onDelete: 'CASCADE',
    foreignKey: 'profesor_id'
});

MateriaXProfesor.belongsTo(Profesor,{
    foreignKey: 'profesor_id'
})

MateriaXProfesor.belongsTo(Materia,{
    foreignKey:'materia_id'
})

Materia.hasMany(Recurso, {
    foreignKey: 'materia_id',
    onDelete: 'CASCADE'
});
Recurso.belongsTo(Materia, {
    foreignKey: 'materia_id'
});

TipoRecurso.hasMany(Recurso, {
    foreignKey: 'tipo_recurso_id',
    onDelete: 'CASCADE'
});
Recurso.belongsTo(TipoRecurso, {
    foreignKey: 'tipo_recurso_id'
});

Usuario.hasMany(Task, {
    foreignKey: 'usuario_id',
    onDelete: 'CASCADE'
});
Task.belongsTo(Usuario, {
    foreignKey: 'usuario_id'
});

const defineModels = () => {
    Rol(sequelize, Sequelize)
    Usuario(sequelize, Sequelize)
    Rol(sequelize, Sequelize)
    Comentario(sequelize, Sequelize)
    Materia(sequelize, Sequelize)
    Semestre(sequelize, Sequelize)
    MateriaXProfesor(sequelize, Sequelize)
    Profesor(sequelize, Sequelize)
    Recurso(sequelize, Sequelize)
    TipoRecurso(sequelize, Sequelize)
    UsuarioXMateria(sequelize, Sequelize)
    Task(sequelize, Sequelize); // Definir el modelo Task
}
// Sincronización de modelos
// defineModels();
await sequelize.sync();

export {
    Usuario,
    Rol,
    Comentario,
    Materia,
    Semestre,
    MateriaXProfesor,
    Profesor,
    Recurso,
    TipoRecurso,
    UsuarioXMateria,
    Task, // Exportar el modelo Task,
    defineModels
};

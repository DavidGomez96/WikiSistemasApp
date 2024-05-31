import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'wikisistemas',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.sync({ force: true })
.then(() => {
    console.log('Database synchronized');
})
.catch((error) => {
    console.error('Failed to synchronize database:', error);
});


export default sequelize;

// sequelize.authenticate().then( () => {
//   console.log('Conectado');
// }).catch((error) => {
//   console.log('erro base de datos')

// }); 

// export default sequelize;

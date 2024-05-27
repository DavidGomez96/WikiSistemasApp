import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'wiki_sistemas_db',
  'root',
  '12345',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.sync({ force: false })
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

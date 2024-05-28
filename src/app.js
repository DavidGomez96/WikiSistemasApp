// import express from 'express'
// // import sequelize from './database.js'
// // import { recursoRouter } from './routes/recursosRoute.js'
// // import { usuarioRouter } from './routes/usuariosRoute.js'

// const app = express()


// const PORT = process.env.PORT ?? 8080

// app.listen(PORT, () => {
//   console.log(`servidor escuchando por el puerto http://localhost${PORT}`)
// });

import express from 'express';
import { materiaRouter } from './routes/materiasRoute.js';
// import { materiaRouter } from './routes/materiasRouter.js'; 
// Ajusta la ruta según tu estructura de proyecto

const app = express();
const PORT = 8080;

app.use(express.json()); // Para manejar las solicitudes con cuerpo en formato JSON

// Usar el router de materias
app.use('/materias', materiaRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

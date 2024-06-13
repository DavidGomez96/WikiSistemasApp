import express from 'express';
import cors from 'cors'
import materiaRouter from './routes/materiasRoute.js';
import recursosRouter from './routes/recursosRoute.js';
import usuarioRouter from './routes/usuariosRoute.js';
import semestreRouter from './routes/semestreRoute.js';
import comentariosRouter from './routes/comentariosRoute.js';
import authRouter from './routes/authRoute.js';
import profesorRouter from './routes/profesoresRoute.js'
import taskRouter from './routes/taskRoute.js'; // Importar las rutas de Task

// import {} from './models/index.js'


const app = express();
const PORT = 8080;

app.use(express.json()); // Para manejar las solicitudes con cuerpo en formato JSON
app.use(cors()) 

// Usar el router de materias
app.use('/semestres', semestreRouter);
app.use('/materias', materiaRouter);
app.use('/recursos', recursosRouter);
app.use('/usuarios', usuarioRouter);
app.use('/comentarios', comentariosRouter);
app.use('/login', authRouter);
app.use('/profesores', profesorRouter); // Agrega el router de profesores
app.use('/tasks', taskRouter); // Agregar el router de tareas

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import materiaRouter from './routes/materiasRoute.js';
import recursoRouter from './routes/recursosRoute.js';
import usuarioRouter from './routes/usuariosRoute.js';
import semestreRoute from './routes/semestreRoute.js';



const app = express();
const PORT = 8080;

app.use(express.json()); // Para manejar las solicitudes con cuerpo en formato JSON

// Usar el router de materias
app.use('/materias', materiaRouter);
app.use('/recursos', recursoRouter);
app.use('/usuarios', usuarioRouter)
app.use('/semestres', semestreRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

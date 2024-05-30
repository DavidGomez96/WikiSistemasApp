import express from 'express';
import cors from 'cors'
import materiaRouter from './routes/materiasRoute.js';
import recursoRouter from './routes/recursosRoute.js';
import usuarioRouter from './routes/usuariosRoute.js';
import semestreRouter from './routes/semestreRoute.js';
import comentariosRouter from './routes/comentariosRoute.js';


const app = express();
const PORT = 8080;

app.use(express.json()); // Para manejar las solicitudes con cuerpo en formato JSON
app.use(cors())

// Usar el router de materias
app.use('/materias', materiaRouter);
app.use('/recursos', recursoRouter);
app.use('/usuarios', usuarioRouter)
app.use('/semestres', semestreRouter);
app.use('/comentarios', comentariosRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express'
// import sequelize from './database.js'
// import { recursoRouter } from './routes/recursosRoute.js'
// import { usuarioRouter } from './routes/usuariosRoute.js'

const app = express()


const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log(`servidor escuchando por el puerto http://localhost${PORT}`)
});
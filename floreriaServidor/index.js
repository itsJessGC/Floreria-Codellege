const express = require('express');
const conexion = require('./config/db');
const cors = require("cors");

//creamos al servidor
const app = express();

//conexion a la BD
conexion();
app.use(cors());

app.use(express.json());

app.use('/api/flores', require('./routes/rut-flores'));



app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})
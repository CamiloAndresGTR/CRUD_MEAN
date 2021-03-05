const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
//Creamos el servidor
const app = express();
// Conectar base de datos
conectarDB();
app.use(cors());

app.use(express.json());


//Definir ruta principal
app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente");
})
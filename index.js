const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
const app = express();
const recetaRutas = require('./rutas/recetaRutas');

//configuraciones de environent
const PORT = process.env.PORT || 3000;
const MONGO_URI =process.env.MONGO_URI;
//manejo de JSON
app.use(express.json());
//CONEXION CON MONGODB
mongoose.connect(MONGO_URI)
.then(() => {
        console.log('Conexion exitosa');
        app.listen(PORT, () => {console.log("servidor express corriendo en el puerto "+PORT)})
    }
).catch(error => console.log('error de conexion', error));

//utilizar las rutas de recetas
app.use('/recetas', recetaRutas)
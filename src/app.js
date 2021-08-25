// Importación de base de datos
const mongoose = require('./database/database');
const morgan = require('morgan');

require('dotenv').config();



// Importación de modelos
//const Usuarios = require('./models/usuarios');


//const productosRouter = require('./routes/productos');
const cuentaBancariaRouter = require('./routes/cuentaBancaria');


// Importaciones adicionales
const express = require('express');
const app = express();

// Settings
app.use(express.json());
app.use(morgan('combined'));

//app.use('/productos', productosRouter);

app.use('/cuentasBancarias', cuentaBancariaRouter);

app.use('/version', (req, res) => {
    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    admin.buildInfo(function (err, info) {
        console.log(`Versión interna mongodb: ${info.version}`);
        console.log(`Versión interna mongoose: ${mongoose.version}`);
    });
    res.json('Home Banking Acámica v1.0');
})

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Servicio iniciado en puerto ' + process.env.EXPRESS_PORT)
}
)




const { Schema, model } = require('mongoose');

// creamos un esquema
const CuentaBancariaSchema = new Schema({
    nombre: {
        type: String, required: true
    },
    apellido: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    saldoInicial: {
        type: Number, required: true
    }
});


module.exports = model('cuentaBancaria', CuentaBancariaSchema);
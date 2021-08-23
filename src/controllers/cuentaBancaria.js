// Importación de modelos
const cuentaBancaria = require('../models/cuentaBancaria');

exports.cuentaBancariaList = async function (req, res, next) {
    const todos = await platos.find();
    console.log(todos);
    res.json(todos);
};


exports.cuentaBancariaExistePorEmail = async function (req, res, next) {
    console.log(req.body);

    //Busqueda estricta (por coincidencia total)
    const filtrado = await cuentaBancaria.find({ codigo: req.body.email });
    console.log(filtrado.length);
    if (filtrado.length == 0) {
        return res.status(404).json({ mensaje: 'Cuenta Bancaria inexistente' })
    } else {
        next();
    }

};

exports.cuentaBancariaListPorNombre = async function (req, res, next) {
    console.log(req.query);

    //Busqueda estricta (por coincidencia total)
    //const filtrado = await cuentaBancaria.find(req.query);

    //Busqueda con inclusión (en cualquier parte del nombre) Fuente: https://masteringjs.io/tutorials/mongoose/find-like
    const filtrado = await cuentaBancaria.find({ nombre: { $regex: req.query.nombre } });

    console.log(filtrado);
    res.json(filtrado);
};




exports.cuentaBancariaCount = async function (req, res, next) {
    // TODO: Tomar datos del body
    //const filtro = {};
    const count = await platos.find().countDocuments();
    console.log(count);
    res.json({ cantidad: count });
};

exports.cuentaBancariasAdd = async function (req, res, next) {
    console.log(req.body);
    let dato = new cuentaBancaria(req.body);
    dato.save(); //es una promesa
    res.json(dato);
};

exports.cuentaBancariaDelete = async function (req, res, next) {
    //TODO: Controlar cuando se intenta borrar con un id "alterado"
    try {
        const cant = await cuentaBancaria.deleteOne({ codigo: req.params.email }, (err, result) => {
            if (err) {
                return res.send(console.log(err.message));
            } else {
                if (result.deletedCount > 0) {
                    return res.json('OK: Se eliminaron ' + result.deletedCount + ' documentos');
                } else {
                    return res.status(404).json('Documento no encontrado');
                }
            }
        }
        );
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.cuentaBancariaUpdate = async function (req, res, next) {
    //TODO: Controlar cuando se intenta borrar con un id "alterado"
    try {
        if (req.params.codigo !== req.body.codigo) {
            return res.status(404).json('Actualización descartada por incompatibilidad de código');
        };
        const cant = await cuentaBancaria.updateOne({ codigo: req.params.email }, req.body, (err, result) => {
            console.log('nuevo')
            console.log(err)
            if (err) {
                return res.send(console.log(err.message));
            } else {
                console.log(result)
                return res.json('OK: Se actualizaron ' + result.nModified + ' documentos');
            };
        }
        );
    }
    catch (err) {
        console.log(err.message);
    }
};

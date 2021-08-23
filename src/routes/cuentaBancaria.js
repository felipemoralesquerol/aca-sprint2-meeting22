const express = require('express');
const app = express();

const router = express.Router();

// Controllers
const cuentaBancariaController = require('../controllers/cuentaBancaria');

// platos
router.get('/', cuentaBancariaController.platosList);
router.get('/search/', cuentaBancariaController.platosListPorNombre);
router.get('/count', cuentaBancariaController.platosCount)
router.post('/', cuentaBancariaController.platosAdd);
router.delete('/:codigo', cuentaBancariaController.platosExistePorCodigo, platosController.platosDelete);
router.put('/:codigo', cuentaBancariaController.platosExistePorCodigo, platosController.platosUpdate);


module.exports = router;



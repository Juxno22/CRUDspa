//Invocamos el metedo Router(), para manejar las rutas
const express = require('express');
const router = express.Router();

//Importamos el objeto creado en la carpeta controllers
const customerController = require('../controllers/customerController');

//Creamos las rutas que el servidor va poder iniciar
router.get('/', customerController.list);
router.post('/add', customerController.save);




// Exportamos
module.exports = router;
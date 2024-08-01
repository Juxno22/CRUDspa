//Invocamos el metedo Router(), para manejar las rutas
const express = require('express');
const router = express.Router();

//Importamos el objeto creado en la carpeta controllers
const customerController = require('../controllers/customerController');

//Creamos las rutas que el servidor va poder iniciar
router.get('/inicio', customerController.inicio);
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:idServicio', customerController.delete);//agregamos a la ruta el id del registro que queremos eliminar
router.get('/update/:idServicio', customerController.edit);//agregamos a la ruta el id del registro que queremos actualizar
router.post('/update/:idServicio', customerController.update);//Mostramos el servicio actualizado




// Exportamos
module.exports = router;
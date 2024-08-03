//Invocamos el metedo Router(), para manejar las rutas
const express = require('express');
const router = express.Router();

//Importamos el objeto creado en la carpeta controllers
const customerController = require('../controllers/customerController');

//Creamos las rutas que el servidor va poder iniciar

//Rutas del CRUD de servicios
router.get('/inicio', customerController.inicio);
router.get('/', customerController.list);// mostramos los servicios enlistados
router.post('/add', customerController.save);
router.get('/delete/:idServicio', customerController.delete);//agregamos a la ruta el id del registro que queremos eliminar
router.get('/update/:idServicio', customerController.edit);//agregamos a la ruta el id del registro que queremos actualizar
router.post('/update/:idServicio', customerController.update);//Mostramos el servicio actualizado

//Rutas del CRUD de productos
router.get('/producto', customerController.listP);//Ruta para el incio de los productos
router.post('/addproducto', customerController.saveProducto);//Ruta para agregar un nuevo producto
router.get('/deleteproducto/:idProducto', customerController.deleteProducto);//Ruta para eliminar un producto
router.get('/updateproducto/:idProducto', customerController.editProducto);//Ruta editar un producto
router.post('/updateproducto/:idProducto', customerController.updateProducto);//Ruta para mostar el producto actualizado


// Exportamos
module.exports = router;
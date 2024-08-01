//Inicializamos los modulos que vamos a utilizar
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//configuramos el motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));//ruta multiplataforma

//Configuracion de los middlewares. Funciones que se ejecutan antes de que vengan las peticiones de los usuarios
app.use(morgan('dev')); //Para ver las solicitudes
app.use(express.urlencoded({extended: false})); //metodo para entender los datos que vienen del formulario

//Configuramos la conexion a la base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spa',
    port: 3306
}, 'single'));

//Importamos el metodo para utilizar las rutas
const customerRoutes = require('./routes/customer');
//rutas
app.use('/', customerRoutes);
app.use('/admin', customerRoutes);






// Configuracion de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//Creamos el puerto, por si el sistema tiene uno.
app.set('port', process.env.PORT || 3000);

//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log('Servidor inciado');
});
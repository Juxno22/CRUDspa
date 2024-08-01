//Inicializamos los modulos que vamos a utilizar
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Creamos el puerto, por si el sistema tiene uno.
app.set('port', process.env.PORT || 3000);

//configuramos el motor de plantillas ejs
app.use('view engine', 'ejs');
app.use('views', path.join(__dirname + 'views'));//ruta multiplataforma

//Configuracion de los middlewares. Funciones que se ejecutan antes de que vengan las peticiones de los usuarios
app.use(morgan('dev')); //Para ver las solicitudes

//Configuramos la conexion a la base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spa',
    port: 3306
}));


//rutas



//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log('Servidor inciado');
});
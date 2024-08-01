//Creamos un objeto
const controller = {};
//Creamos varios metodos de un mismo objeto

controller.list = (req, res)=>{
    //Utilizamos el metodo para jalar la conexion creada en app.js
    req.getConnection((err, conn)=>{
        if(err) throw err;
        // conn es la conexion que se obtuve a partir del metodo anterior
        conn.query('select * from servicios', (err, rows)=>{
            if(err) throw err;

            res.render('agregar', {
                data: rows
            });
        });
    })
};

//Creamos el metodo para agregar un nuevo servicio
controller.save = (req, res)=>{
    req.body
};









//Exportamos el objeto, para utilizar los metodos
module.exports = controller;
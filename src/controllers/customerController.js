//Creamos un objeto
const controller = {};


//Creamos varios metodos de un mismo objeto

//Mostramos el inicio
controller.inicio = (req, res)=>{
    res.render('index');
};


//Creamos el metodo para lstar los servicios
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
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('insert into servicios set ?', [data], (err, rows)=>{
            console.log(rows);
            res.redirect('/admin');
        });

    });
};

//Creamos el metodo para editar un servicio
controller.edit = (req,res)=>{
    const {idServicio} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('select * from servicios where idServicio = ?', [idServicio], (err, rows)=>{
            console.log(rows);
            res.render('edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res)=>{
    const {idServicio} = req.params;
    const newCustomer = req.body;

    req.getConnection((err, conn)=>{
        conn.query('update servicios set ? where idServicio = ?',[newCustomer, idServicio], (err, rows)=>{
            console.log(rows);
            res.redirect('/admin');
        });
    });
};


//Creamos el metodo para elimnar un servicio
controller.delete = (req, res)=>{
    const {idServicio} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('delete from servicios where idServicio = ?', [idServicio], (err, rows)=>{
            console.log(rows);
            res.redirect('/admin');
        });
    })
};









//Exportamos el objeto, para utilizar los metodos
module.exports = controller;
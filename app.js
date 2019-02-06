// "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="D:\Carlos\Documents\DATABASE_MONGO"  -- APUNTAR A LA BASE DE DATOS

// "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"   INICIALIZAR MONGO

// npm start  -- inicializar el proyecto


// requires
var express = require('express');
var mongoose = require('mongoose');

// conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if ( err ) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m ', 'online');
    
});

// inicializar variables
var app = express();

//Rutas

app.get('/', ( req, res, next ) =>{
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
});

//Escuchar peticiones
app.listen(3000, ()=>{
    console.log('express server puerto 3000: \x1b[32m%s\x1b[0m ', 'online');
})

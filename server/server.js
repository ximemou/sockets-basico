const express = require('express');

const app = express();

const socketIO = require('socket.io');

// socketio no trabaja directamente con express si trabaja con un servidor http por defecto que tre node
const http = require('http');
let server= http.createServer(app);


const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO= esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

//el objeto client contiene toda la info de la conexion que se establecio

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
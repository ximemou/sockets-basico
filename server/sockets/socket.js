
const {io} = require('../server');

io.on('connection', (client)=>{

    console.log('Usuario conectado');
    
    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:"Bienvenido a esta aplicacion"
    });

    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });
   
    //Escuchar al cliente
    client.on('enviarMensaje', (data,callback)=>{
       
        console.log(data);
        client.broadcast.emit('enviarMensaje',data);



     /*    console.log(mensaje);

        if(mensaje.usuario){
            callback({
               resp: 'Todo ok'
            });
        }else{
            callback({
                resp: 'Todo mal!!!!'
            });
        } */
    });
});

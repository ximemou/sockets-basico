var socket= io();
      socket.on('connect',function(){
          console.log('Conectado al servidor');
      });

      // los on son para escuchar
      socket.on('disconnect', function (){
         console.log('Perdimos conexion con el servidor');
      });

      // los emit son para enviar informacion
      socket.emit('enviarMensaje',{
          usuario: 'Pedro',
          mensaje: 'Hola todos'
      },function(resp){
          console.log('respuesta server: ',resp);
      });

      // escuchar informacion
      socket.on('enviarMensaje', function(mensaje){
        console.log('Servidor: ', mensaje)
      });

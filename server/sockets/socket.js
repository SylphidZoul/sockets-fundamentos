const {io} = require('../server')
// On es para escuchar eventos
io.on('connection', (client) => {
  console.log('Usuario conectado')

  client.emit('enviarMensaje', {
      usuario: 'Administrador',
      mensaje: 'Bienvenido a esta aplicacion'
  })

  client.on('disconnect', () => {
      console.log('Usuario desconectado')
  })

  // Para verificar de que la data llego, recibimos por segundo parametro el callback y lo disparamos dentro de la lectura.
  client.on('enviarMensaje', (data, callback) => {
      console.log(data)


      client.broadcast.emit('enviarMensaje', data)
      
      // if (mensaje.usuario) {
          
      //     callback({
      //         resp: 'TODO SALIO BIEN'
      //     });

      // } else {
          
      //     callback({
      //         resp: 'TODO SALIO MAL'
      //     });
          
      // }
  })
})
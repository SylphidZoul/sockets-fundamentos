
        var socket = io()
        // Los .on son para escuchar

        socket.on('connect', () => {
            console.log('Conectado al servidor')
        })

        socket.on('disconnect', () => {
            console.log('Perdimos conexion con el servidor')
        })
        //  Los emit son para emitir, el callback de la emision recibe la respuesta que da el servidor cuando escucha la emision.
        socket.emit('enviarMensaje', {
            usuario: 'Zoul',
            mensaje: 'Hello World'
        }, (resp) =>{
            console.log('respuesta server', resp)
        })

        socket.on('enviarMensaje', (mensaje) => {
            console.log(mensaje)
        })

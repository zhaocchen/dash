var net = require('net')
var socket = net.connect('8888')
// var socket = net.connect('8888', 'localhost')

socket.on('connect', () => {
    console.log('connect')

    socket.on('data', data => {
        console.log(data.toString())
        socket.end()
    })
})

socket.on('end', () => {
    console.log('i close connect')
})

socket.on('error', () => {
    console.log('connect error')
})

const net = require('net')
const server = net.createServer()

const clientList = []

server.listen(8888)

server.on('listening', () => {
    console.log('server open')
})

server.on('connection', socket => {
    // client.write('hello \n')

    clientList.push(socket)
    socket.on('data', data => {
        console.log('receive', data.toString())
        // 广播
        clientList.forEach(v => {
            v.write(data)
        })
    })

    socket.on('error', () => {
        console.log('connection error')
    })

    server.close()
})

server.on('close', () => {
    console.log('server close')
})



// 方式1， 可接受信息
// 建立tcp链接
// telnet localhost 8888

// 方式2， node chat_net_client.js
// 仅测试连接
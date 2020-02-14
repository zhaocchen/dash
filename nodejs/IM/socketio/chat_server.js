var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// var path = require('path')
var server = require('http').createServer(app)
// var server = require('http').Server(app)
var io = require('socket.io')(server)

app.use(bodyParser.json())

const msgList = ['init']

app.get('/', (req, res) => {
    // res.sendFile(path.resolve('./chat.html'))
    res.sendFile(__dirname + '/chat.html')
})

app.post('/send', (req, res) => {
    console.log('send', req.body.message)
    msgList.push(req.body.message)
    io.emit('chat', msgList)
    res.end(JSON.stringify(msgList))
})

app.post('/clear', (req, res) => {
    console.log('clear message...')
    msgList.length = 0
    io.emit('chat', msgList)
    res.end(JSON.stringify(msgList))
})

io.on('connection', function(socket) {
    console.log('a user connected')
    // socket.emit('news', { hello: 'world' });
    socket.on('chat', data => {
        console.log('message:', data)

        // 接受后广播
        io.emit('chat', data)
    })

    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
})

server.listen(8888, () => {
    console.log('listen on 8888')
})

// run server
// Access http://localhost:8888/ in multiple windows of browser


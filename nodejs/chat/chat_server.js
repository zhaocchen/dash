var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

app.use(bodyParser.json())

const msgList = ['init']

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./chat.html'))
})

app.get('/all', (req, res) => {
    res.end(JSON.stringify(msgList))
})

app.post('/send', (req, res) => {
    console.log(req.body)
    msgList.push(req.body.message)
    res.end(JSON.stringify(msgList))
})

app.post('/clear', (req, res) => {
    msgList.length = 0
    res.end(JSON.stringify(msgList))
})

app.listen(8888, () => {
    console.log('listen at 8888')
})

// run server
// Access http://localhost:8888/ in multiple windows of browser


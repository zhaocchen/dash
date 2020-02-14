var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var bodyParser = require('body-parser')
var os = require('os')
var cpuStat = require('cpu-stat')

server.listen(8888, () => {
    console.log('listen on 8888...')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

var timer = null
var count = 0
var cpuUtilization = 0


io.on('connect', socket => {
    console.log('a user connected!')
    monitor()
    socket.on('disconnect', () => {
        clearInterval(timer)
        console.log('disconnected', timer)
    })
})

function getStat() {
    const freemem = os.freemem()
    const totalmem = os.totalmem()
    var memUtilization = 1 - freemem / totalmem
    // var cpuUtilization = 0
    cpuStat.usagePercent((err, percent) => {
        cpuUtilization = percent
        // console.log(cpuUtilization)
    })
    // console.log(cpuUtilization)
    return {
        cpuUtilization,
        freemem,
        totalmem,
        memUtilization,
    }
}

 

function monitor() {
    timer = setInterval(() => {
        var newStat = getStat()
        // console.log(newStat)
        io.emit('update', {
            count,
            ...newStat,
        })
        count = count + 1
    }, 1000) 
}


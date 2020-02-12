var http = require('http')
var fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req)
    const { url, method, headers } = req
    console.log(url, method)

    if (url === '/' && method === 'GET') {
        // http://localhost:8888/
        fs.readFile('home.html', (err, data) => {
            if (!err) {
                // 默认200
                // res.statusCode = 200
                // 默认无Content-Type头部
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            } else {
                // 若不处理, 仅会在服务端抛异常
               res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'}) 
               res.end('Server Error 服务器错误！')
            }
        })
    } else if (url === '/user' && method === 'GET') {
        // http://localhost:8888/user
        res.setHead('Content-Type', 'application/json')
        res.end(JSON.stringify({name: 'Jack', age: 21}));
    } else if (method === 'GET' && headers.accept.indexOf('image/*') != -1) {
        fs.createReadStream('.'+url).pipe(res)
    }

    // res.end('hello')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');

var http = require('http')
var url = require('url')

let router = []
// let router = [{
//     path: '/',
//     method: 'get',
//     handler: function() {}
// }]

class MinExpress {
    get(path, handler) {
        router.push({
            path,
            method: 'get',
            handler
        })
    }

    listen() {
        // console.log(...arguments)
        http.createServer((req, res) => {
            // console.log(req.url)
            const { pathname } = url.parse(req.url, true)
            // 遍历router， 并作出相应的response
            router.forEach(route => {
                let { path, method, handler } = route;
                if (pathname == path && req.method.toLowerCase() == method) {
                    return handler(req, res)
                }
            })
        }).listen(...arguments)
    }
}

module.exports = express = () => {
    return new MinExpress();
}
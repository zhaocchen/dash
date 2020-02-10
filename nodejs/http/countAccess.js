var http = require('http');
let count = 0;
http.createServer(function(request,response){
	console.log(`creat http, 第${count}被访问`)
	count += 1,
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');

//creat http, 在http://127.0.0.1:8888/被访问时才执行

// output
// Server running at http://127.0.0.1:8888/
// creat http
// creat http
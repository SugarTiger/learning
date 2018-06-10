console.log('启动服务。。。')
var http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text-plain'
    });
    console.log(request.url)
    // response.end('Hello Nodejs Http\n');
    request.on('data', (chunk) => {
        response.write(chunk)
    })
    request.on('end', function () {
        response.end();
    });
}).listen(8124);
console.log('服务启动成功，端口：8124')
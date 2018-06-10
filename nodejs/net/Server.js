console.log('启动服务。。。')
var net = require('net');
net.createServer(conn=>{
    conn.on('data',data=>{
        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World'
        ].join('\n'));
    });
}).listen(80)
console.log('服务启动成功，端口：80')
const http = require('http');
const fs = require('fs');
const app = http.createServer((req,res)=>{
    fs.readFile(__dirname+'/index.html',(err,data)=>{
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
});
const io = require('socket.io')(app);
io.on('connection',(socket)=>{
    socket.emit('news',{hello:'afei'});
    socket.on('my other event',(data)=>{
        console.log(data)
    })
})
console.log('Server running listen:8033')
app.listen(8033);
const io = require('socket.io')(8033);
io.on('connection',(socket)=>{
    io.emit('this',{will:'be received by everyone'})
    socket.on('private message',(from,msg)=>{
        console.log('I received a private message by ', from, ' saying ', msg);
    });
    socket.on('disconnect',()=>{
        io.emit('user disconnected');
    })
})
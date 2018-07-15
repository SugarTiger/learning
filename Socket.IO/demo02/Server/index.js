const io = require('socket.io')(8033);
io.on('connection',socket=>{
    console.log('a user connected');
    socket.on('chat message',(data)=>{
        console.log(data);
        socket.emit('chat message','收到');
    });
});  
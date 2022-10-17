// const Koa = require('koa');
// const app = new Koa();
// const io = require('socket.io')(app);
// const fs = require('fs');
// app.use(async ctx => {
//     const data = fs.readFileSync(__dirname+'/index.html');
//     ctx.body = data.toString();
// })
// io.on('connection', function (socket) {
//     console.log('hello afei ')
//     socket.emit('news', {
//         hello: 'world'
//     });
//     socket.on('my other event', function (data) {
//         console.log(data);
//     });
// });
// console.log('Server running listen:8033')
// app.listen(8033);
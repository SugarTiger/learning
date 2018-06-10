const koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const config = require('./config');
const app = new koa();
const router = require('./router');

const staticPath = './static';




app
    .use(static(path.join(__dirname,staticPath)))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    
app.listen(config.port,()=>{
    console.log('正在监听3000端口...')
})
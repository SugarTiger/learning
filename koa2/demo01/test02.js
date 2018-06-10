const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')
const config = require('./default');
const mysql = require('./mysql');
const md5 = require('md5')
const app = new koa();
const router = new Router();

const staticPath = './static';


router.get('/',(ctx,next)=>{
    let html = `
    <form action="/insertUser" method="post">
        <p>用户名：</p>
        <input type="text" name="username" id="">
        <p>密码</p>
        <input type="password" name="paw" id="">
        <input type="submit" value="注册">
    </form>
    `;
    ctx.body = html
}).get('/index',(ctx)=>{
    ctx.body = 'index'
}).get('/index/:id',async(ctx)=>{
    ctx.body = ctx.params
}).post('/insertUser',async(ctx)=>{
    console.log('提交了')
    let postData = ctx.request.body;
    let userList = await mysql.findDataByUser(postData.username)
    if(!!userList.length){
        ctx.body = {
            status:'fail',
            msg:"此用户名已存在"
        }
        return;
    }
    let rows = await mysql.insertData({name:postData.username,pass:md5(postData.paw)})
    // let rows = await mysql.insertData([postData.username,md5(postData.paw)])
    if(rows.err){
        ctx.body = {
            status:'fail',
            msg:"注册失败",
            error:rows
        }
    }else{
        let data = await mysql.showDataUser()
        ctx.body = {
            status:'success',
            msg:"注册成功",
            data:data
        }
    }
})

app
    .use(static(path.join(__dirname,staticPath)))
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(config.port,()=>{
    console.log('正在监听3000端口...')
})
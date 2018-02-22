const Router = require('koa-router')
const router = new Router()
const UserController = require('./api/UserController')

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
}).post('/insertUser',UserController.register)

module.exports = router;
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new koa();
app.use(bodyParser())
app.use(async (ctx)=>{
    console.log(ctx.url)
    console.log(ctx.method)
    if(ctx.url==='/index'&&ctx.method=='GET'){
        let html = `
        <h1>POST 请求</h1>
        <form method="post" action='/post'>
        <p>名字：</p>
        <input name="myname" type="text"/>
        <p>密码：</p>
        <input name="pws" type="text"/>
        <input type="submit" value="提交"/>
        </form>
        `;
        ctx.body=html;
    }else if(ctx.url=='/post'&&ctx.method=='POST'){
        console.log('访问post');
        ctx.body=ctx.request.body;
    }else{
        ctx.body = '<h1>404!</h1>';
    }
})
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postData = '';
            ctx.req.on('data',(data)=>{
                postData+=data;
            })
            ctx.req.addListener('end',()=>{
                resolve(postData)
            })
        }catch(err){reject(err)}
    })
}
app.listen(3000,()=>{
    console.log('正在监听3000端口...')
})
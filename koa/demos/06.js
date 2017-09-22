const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/about">About Page</a>';
};
const about = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
}
app.use(route.get('/',main));
app.use(route.get('/about',about));
app.listen(3000)
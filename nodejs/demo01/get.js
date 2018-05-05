var express = require('express');
var request = require('request');
var app = express();
app.use('/public',express.static('public'));

app.get('/', function(req, res){
    console.log('发生get请求')
    res.sendFile(__dirname + "/index.html")
})
app.get('/zhihu', function (req, res) {
    // 转发请求
    request('https://zhuanlan.zhihu.com/api/recommendations/columns?limit=10&offset=0&seed=46', function (error, response, body) {
        res.send(body);
    });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
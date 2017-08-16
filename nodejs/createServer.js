var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use('/public',express.static('public'));

app.get('/', function(req, res){
    console.log('发生get请求')
    res.sendFile(__dirname + "/index.html")
})

app.post('/saveJSON', function(req, res){
    let str_json = JSON.stringify(req.body);
    fs.writeFile('graph.json', str_json, 'utf8', () => {
        console.log('保存完成')
    });
});
app.listen(3000)
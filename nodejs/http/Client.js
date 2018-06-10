var http = require('http');
http.get('http://gank.io/api/data/Android/10/1', (response) => {
    var body = [];
    response.on('data', function (chunk) {
        body.push(chunk);
    });
    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
})
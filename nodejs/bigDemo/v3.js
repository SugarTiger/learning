var fs = require('fs'),
path = require('path'),
http = require('http');

const MIME = {
    '.css':'text/css',
    '.js':'application/javascript'
};
function outputFiles(pathnames,writer){
    (function next(i,len){
        if(i<len){
            var reader = fs.createReadStream(pathnames[i]);
            reader.pipe(writer,{end:false});  //reader结束时不结束writer
            reader.on('end',()=>{
                next(++i,len);
            });
        }else{
            writer.end();
        }
    })(0,pathnames.length);
}

function validateFiles(pathnames,callback){
    (function next(i,len){
        if(i<len){
            fs.stat(pathnames[i],(err,stats)=>{
                if(err){
                    callback(err);
                }else if(!stats.isFile()){
                    callback(new Error());
                }else{
                    next(++i,len);
                }
            });
        }else{
            callback(null,pathnames)
        }
    })(0,pathnames.length);
}

function parseURL(root,url){
    var base,pathnames,parts;
    if(url.indexOf('??')===-1){
        url = url.replace('/','/??');
    }

    parts = url.split('??');
    base = parts[0];
    pathnames = parts[1].split(',').map(value=>{
        return path.join(root,base,value);
    })
    return {
        mime:MIME[path.extname(pathnames[0])]||'text/plain',
        pathnames
    }
}

function main(argv){
    var config = JSON.parse(fs.readFileSync(argv[0],'utf-8')),
    root = config.root || '.',
    port = config.port || 80;
    var server = http.createServer((request,response)=>{
        var urlInfo = parseURL(root,request.url);
        validateFiles(urlInfo.pathnames,(err,pathnames)=>{
            if(err){
                response.writeHead(404);
                response.end(err.message);
            }else{
                response.writeHead(200,{
                    'Content-Type':urlInfo.mime
                });
                outputFiles(pathnames,response);
            }
        });
    }).listen(port);
    console.log('http服务启动成功。。。');

    process.on('SIGTERM',function(){
        console.log('子进程')
        server.close(()=>{
            process.emit(0);
        })
    })
}

// main(process.argv.slice(2)); //命令行触发
main(['./config.json']);
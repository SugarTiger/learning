// 遍历目录
// 同步
var fs = require('fs');
var path = require('path');
function travel(dir){
    fs.readdirSync(dir).forEach(file=>{
        var pathname = path.join(dir,file);
        if(fs.statSync(pathname).isDirectory()){
            travel(pathname);
        }else{
            console.log(pathname)
        }
    });
}
// travel('./fs/m1')

// 异步
function asyncTravel(dir){
    fs.readdir(dir,(err,files)=>{
        files.forEach(file=>{
            var pathname = path.join(dir,file);
            fs.stat(pathname,(err,stats)=>{
                if(stats.isDirectory()){
                    asyncTravel(pathname)
                }else{
                    console.log(pathname)
                }
            })
        })
    })
}
asyncTravel('./fs/m1')
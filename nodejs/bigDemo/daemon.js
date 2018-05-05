// 守护进程 
var cp = require('child_process');
var worker;
function spawn(server,config){
    worker = cp.spawn('node',[server,config]);//启动子进程
    worker.on('exit',code=>{
        if(code!==0){
            spawn(server,config);
        }
    });
    worker.stdout.on('data',data=>{
        console.log('child stdout: ' + data);
    });
    worker.kill('SIGTERM');
}

function main(argv){
    spawn('v3.js',argv[0]);
    process.on('SIGTERM',()=>{
        console.log('父进程')
        worker.kill();
        process.exit(0);
    });
}

// main(process.argv.slice(2));
main(['./config.json']);
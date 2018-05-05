var child_process = require('child_process'),
child = child_process.spawn('node',['process.js']);
child.stdout.on('data',data=>{
    console.log('stdout:',data.toString());
});

child.stderr.on('data',data=>{
    console.log('stderr: ' + data);
});

child.on('close',code=>{
    console.log('close ' + code);
});

child.on('exit',code=>{
    console.log('exit ' + code);
})
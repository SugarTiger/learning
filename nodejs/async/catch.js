// 同步
function sync(fn) {
    return fn();
}
try {
    sync(null);
} catch (err) {
    console.log('Error: %s', err.message);
}


// 异步
function async(fn, callback) {
    setTimeout(function ()　{
        try{
            callback(null,fn());
        }catch(err){
            callback(err);
        }
    }, 0);
}

async(null, function (err,data) {
    if (err) {
        console.log('Error: %s', err.message);
    } else {
        // Do something.
    }
});


// 全局
process.on('uncaughtException', function (err) {
    console.log('Error: %s', err.message);
});

setTimeout(function (fn) {
    fn();
});
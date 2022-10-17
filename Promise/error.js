// const someAsyncThing = function(){
//     return new Promise((resolve,reject)=>{
//         resolve(x+2);
//     })
// }
// someAsyncThing().then(data=>console.log(data))
// process.on('unhandledRejection',(err,p)=>{
//     console.log(err)
// })
// console.log(111)

const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().then(function () {
    return someOtherAsyncThing();
}).catch(function (error) {
    console.log('oh no', error);
    // 下面一行会报错，因为 y 没有声明
    y + 2;
}).then(function () {
    console.log('carry on');
});
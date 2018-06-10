console.log(1)
const promise = new Promise((resolve,reject)=>{
    console.log(2)
    resolve(3)
});
promise.then((data)=>{
    console.log(data);
})
setTimeout(() => {
    promise.then((data)=>{
        console.log(4,data);
    })
}, 1000);
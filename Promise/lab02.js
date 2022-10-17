const p1 = new Promise((resolve,reject)=>{
    console.log('p1')
    setTimeout(() => {
        console.log('我是p1')
        reject(333)
    }, 3000);
});
const p2 = new Promise((resolve,reject)=>{
    console.log('p2')
    resolve(p1)
}).then(data=>{
    console.log('我是p2',data)
}).catch(err=>{
    console.error(err)
})
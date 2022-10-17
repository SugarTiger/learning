const p1 = new Promise((resolve,reject)=>{
    resolve(111)
})
const p2 = new Promise((resolve,reject)=>{
    resolve(222)
})
const pa = Promise.all([p1,p2]).then(([p1,p2])=>{
    console.log(p1,p2)
})
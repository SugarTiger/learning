let thenable = {
    then(resolve,reject){
        console.log(1111)
        resolve(42)
    }
}

const p1 = Promise.resolve(thenable);
p1.then(val=>{
    console.log(val)
})
const p2 = Promise.resolve(5454454).then(val=>{
    console.log(val)
});
const p3 = Promise.resolve((data)=>{
    console.log(data,'data');
    console.log(6666)
}).then(data=>{
    console.log('then',data)
    console.log(888)
})
console.log(5444)
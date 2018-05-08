function mapArray(obj, fn) {
    var arr = [];
    for(var key in obj){
        var a = fn(key,obj[key],obj);
        arr.push(a);
    }
    return arr;
}


const obj = {
    giorgio: 'Bianchi',
    gino: 'Rossi'
};
var a = mapArray(obj,(key,value)=>{
    debugger;
    return key+" "+value;
})
console.log(a)
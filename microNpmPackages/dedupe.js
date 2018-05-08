// 数组去重
// dedupeTyep([1, 2, 2, 3],) =>> [1, 2, 3]

function dedupe(client,hasher){
    hasher = hasher || JSON.stringify; //精髓
    const clone = [];
    const lookup = {};
    client.forEach((item,i)=>{
        let hashed = hasher(item);
        if(!lookup[hashed]){
            clone.push(item);
            lookup[hashed] = true;
        }
    });
    return clone;
}

var a = [1, 2, 2, 3]
var b = dedupe(a)
console.log(b) //result: [1, 2, 3]


var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
var bb = dedupe(aa)
console.log(bb) //result: [{a: 2}, {a: 1}]

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
var bbb = dedupe(aaa, value => value.a)  //属性a不重复
console.log(bbb) //result: [{a: 2, b: 1}, {a: 1,b: 2}]
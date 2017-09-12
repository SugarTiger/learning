function unique(a){
    return [...new Set(a)];
}
var a = [{name: "hanzichi"}, {age: 30}, new String(1), new Number(1),1,2,1];
var ans = unique(a);
console.log(ans); // => [Object, Object, String, Number]

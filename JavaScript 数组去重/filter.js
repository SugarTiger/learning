function unique(a){
    let res = a.filter((item, index, array) => array.indexOf(item) === index);
    return res;
}
var a = [1,1,'1','2',1];
var ans = unique(a);
console.log(ans)
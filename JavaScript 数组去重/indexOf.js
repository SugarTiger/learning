function unique(a){
    let res = [];
    for(var i=0,len = a.length;i<len;i++){
        var item = a[i];
        (res.indexOf(item) === -1)&&res.push(item);
    }
    return res;
}
var a = [1,1,'1','2',1];
var ans = unique(a);
console.log(ans)
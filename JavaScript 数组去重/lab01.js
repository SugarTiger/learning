function unique(a) {
    let res = [];
    for (let i = 0, len = a.length; i < len; i++) {
        let item = a[i];
        for (var j = 0, jLen = res.length; j < jLen; j++) {
            if(res[j] === item) break;
        }
        if(j === jLen) res.push(item)
    }
    return res;
}
const a = [1,1,'1','2',1];
let ans = unique(a);
console.log(ans);

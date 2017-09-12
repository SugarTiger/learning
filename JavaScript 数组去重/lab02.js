// 将原数组中重复元素的最后一个元素放入结果数组中。
function unique(a) {
    let res = [];
    for (var i = 0, len = a.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (a[i] === a[j])j = ++i;
        }
        res.push(a[i])
    }
    return res;
}
var a = [1, 1, '1', '2', 1];
var ans = unique(a);
console.log(ans)
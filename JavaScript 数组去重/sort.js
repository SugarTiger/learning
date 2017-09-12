// 对于 1 和 "1" 无法分别
function unique(a){
    return a.concat().sort().filter((item, pos, arr) => !pos||item != arr[pos - 1])
}

var a = [1, '1', 3, 2, 1, 2, 4];
var ans = unique(a);
console.log(ans); // => [1, 2, 3, 4]
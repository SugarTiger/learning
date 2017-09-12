// 对于 1 和 "1" 无法分别
function unique(a){
    let seen = {};
    return a.filter((item)=> seen.hasOwnProperty(item)?false:(seen[item] = true))
}
var a = [1, 1, 3, 2, 1, 2, 4];
var ans = unique(a);
console.log(ans); // => [1, 2, 3, 4]
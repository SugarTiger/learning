function unique(a) {
    var ret = [];
    var hash = {};
    for (var i = 0, len = a.length; i < len; i++) {
        var item = a[i];
        var key = typeof (item) + item;
        if(hash[key]!==1){
            ret.push(item);
            hash[key]=1;
        }
    }
    return ret;
}

var a = [1, 1, 3, 2, '4', 1, 2, 4, '1'];
var ans = unique(a);
console.log(ans); // => [1, 3, 2, "4", 4, "1"]
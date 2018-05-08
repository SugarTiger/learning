// 返回填充指定输入的数组
function filledArray(x, len) {
    var ret = new Array(n);
    var isFn = typeof item === 'function';
    if (!isFn && typeof ret.fill === 'function') {
        return ret.fill(item);
    }
    for (var i = 0; i < n; i++) {
        ret[i] = isFn ? item(i, n, ret) : item;
    }
    return ret;
}

filledArray('x', 3);
//=> ['x', 'x', 'x']

filledArray(0, 3);
//=> [0, 0, 0]

filledArray(i => {
    return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
}, 15);
//=> [1, 2, 'a', 4, 'Buzz', 'a', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
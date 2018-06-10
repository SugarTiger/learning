// 范围生成数组
// range(3)       // -> [ 0, 1, 2 ]
// range(1, 4)    // -> [ 1, 2, 3 ]

function newArray(start, end) {
    var n0 = typeof start === 'number',
        n1 = typeof end === 'number'
    if (n0 && !n1) {
        end = start
        start = 0
    } else if (!n0 && !n1) {
        start = 0
        end = 0
    }
    start = start | 0
    end = end | 0
    var len = end - start;
    if(len<0){
        throw new Error('array length must be positive')
    }
    var a = new Array(len);
    for(var i=0,c=start;i<len;i++,c++){
        a[i] = c;
    }
    console.log(a)
    return a;
}
newArray();
newArray(0);
newArray(6);
newArray(-2,1);
newArray(1,3);
newArray(0,3);
newArray(3,2);
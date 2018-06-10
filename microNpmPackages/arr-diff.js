// 通过使用严格的相等性进行比较，从其他数组中排除所有值，从而仅返回第一个数组中唯一值的数组。
function arrayDiffer(arr,...values){
    const rest = new Set([].concat(...values));
    return arr.filter(x=>!rest.has(x));
}
function arrDiff(arr,...values){
    var len = values.length,
    idx = -1;
    while(++idx<len){
        arr = diffArray(arr,values[idx]);
    }
    return arr;
};
function diffArray(one,two){
    if(!Array.isArray(two)){
        return one.slice();//不改变原数组，返回一个新数组
    }
    var tlen = two.length,
    olen = one.length,
    idx = -1;
    arr=[];
    while(++idx<olen){
        var ele = one[idx];
        var hasEle = false;
        for(var i=0;i<tlen;i++){
            if(ele===two[i]){
                hasEle = true;
                break;
            }
        }
        if(hasEle===false){
            arr.push(ele);
        }
    }
    return arr;
}
module.exports = arrayDiffer;
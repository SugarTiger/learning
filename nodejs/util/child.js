function arrayList(arr,num){
    var len = arr.length;
    if(num===1){
        return arr[len-1]
    }
    var res = [];
    while(num--){
        res[num] = arr[--len];
    }
    return res
}
console.log(arrayList([1,2,3,4,5,6],4))

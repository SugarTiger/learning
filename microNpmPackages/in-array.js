function inArray(arr,val){
    arr = arr||[];
    var len = arr.length,i;
    for(i=0;i<len;i++){
        if(arr[i]===val){
            return true;
        }
    }
    return false;
}

console.log(inArray(['a', 'b', 'c'], 'a'));
//=> true

console.log(inArray(null, 'a'));
//=> false

console.log(inArray(null));
//=> false
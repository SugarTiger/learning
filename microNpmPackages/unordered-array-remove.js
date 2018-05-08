function remove(arr,index){
    var len = arr.length;
    for(var i=0;i<len;i++){
        if(i>=index){
            if(arr[i+1]){
                arr[i] = arr[i+1];
            }else{
                arr.length=i;
            }
        }
    }
}
function remove2(arr,i){  //调换了数组位置
    if(i>=arr.length|| i<0)return;
    var last = arr.pop();
    if(i<arr.length){
        var tmp = arr[i];
        arr[i] = last;
        return tmp;
    }
    return last;
}
var list = ['a', 'b', 'c', 'd', 'e']
remove2(list, 0) // remove 'c'
console.log(list) // returns ['a', 'b', 'e', 'd'] (no 'c')
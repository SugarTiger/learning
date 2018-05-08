function SwapArray(arr,index,position){
    let InstanceType = Array.isArray(arr)?'array':typeof arr;
    if(InstanceType!=='array')throw '[ERR] SwapArray expects a array as first param';
    var tmp = arr.slice(0);
    tmp[index]=tmp.splice(position,1,tmp[index])[0]
    return tmp;
}
module.exports = SwapArray;
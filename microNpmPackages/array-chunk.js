function arrayChunk(arr,len){
    if(!Array.isArray(arr)){
        throw 'arr必须是数组';
    }
    if(typeof len !=='number'){
        throw 'len必须是numberi';
    }
    if(len<0||len>arr.length){
        return arr;
    }
    var res = [],tmp = [];
    arr.forEach((item,i)=>{
        tmp.push(item);
        var k = i+1;
        if(k%len==0){
            res.push(tmp);
            tmp=[];
        }else if(k===arr.length){
            res.push(tmp);
        }
    });
    return res;
}
module.exports = arrayChunk;
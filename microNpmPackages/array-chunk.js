function arrayChunk(arr,len){
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
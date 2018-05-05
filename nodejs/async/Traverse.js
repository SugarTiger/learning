var arr = [1,2,3,4];
(function next(i,len,callback){
    if(i<len){
        async(arr[i],function(value){
            arr[i] = value;
            next(i+1,len.callback)
        })
    }else{
        callback();
    }
})(0,arr.length,function(){console.log(1)});
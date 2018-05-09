var pipe = (function(){
    return function(value){
        var funcStack = [];
        var oproxy = new Proxy({},{
            get(pipeObject,fnName){
                if(fnName === 'get'){
                    return funcStack.reduce((val,fn)=>{
                        return fn(val);
                    },value)
                }
                funcStack.push(global[fnName])
                return oproxy;
            }
        });
        return oproxy;
    }
})();

global.double = n => n * 2;
global.pow    = n => n * n;
global.reverseInt = n => n.toString().split("").reverse().join("") | 0;
pipe(3).double.pow.reverseInt.get; // 63
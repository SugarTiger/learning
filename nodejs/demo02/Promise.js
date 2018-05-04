var Promise = function () {};
var isPromise = function (val) {
    return val instanceof Promise;
};
var defer = function () {
    var pending = [],
        value, promise = new Promise();
    promise.then = function(callback){
        if(pending){
            pending.push(callback)
        }else{
            callback(value);
        }
    }
    return {
        resolve(_value){
            if(pending){
                value = _value;
                for(var i=0,ii=pending.length;i<ii;i++){
                    var callback = pending[i];
                    callback(value);
                }
                pending = undefined;
            }
        },
        promise
    }
};
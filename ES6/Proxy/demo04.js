function createArray(...element){
    let hanlder = {
        get(target,propKey,receiver){
            let index = Number(propKey);
            if(index<0){
                propKey = String(target.length+index);
            }
            return Reflect.get(target,propKey,receiver);
        }
    };
    let target = [];
    target.push(...element);
    return new Proxy(target,hanlder);
}

let arr = createArray(1,2,3,4);
console.log(arr[-1])
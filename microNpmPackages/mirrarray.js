class MirrarrayError extends Error{
    constructor(msg){
        super(msg);
    }
}
const isValidKey = element=>{
    const isNull = element === null;
    return ['string','number','boolean','undefined'].includes(typeof element) || isNull;
}

const nonOverlappingKey = element=>{
    const isNull = element === null;
    const typeSeenBefore = keysSeen[''+element];
    const thisType = isNull?'null':typeof element;
    if(typeSeenBefore){
        return typeSeenBefore === thisType
    }else{
        keysSeen[''+element] = thisType;
        return true;
    }
}

let keysSeen;

function arrayToKeyMirror(arr){
    keysSeen = {};
    if(!Array.isArray(arr))throw new MirrarrayError('mirrarray的参数必须是数组!');
    return arr.reduce((acc,key)=>{
        if(!isValidKey(key)){
            throw new MirrarrayError('输入数组中包含的元素无效;每个元素必须是一个字符串或数字！');
        }
        if(!nonOverlappingKey(key)){
            throw new MirrarrayError('Distinct elements in the input array are coercing to the same string!');
        }
        acc[key] = key;
        return acc;
    },{});
}
module.exports =arrayToKeyMirror
var p = new Proxy({}, {
    get(target, key, receiver) {
        console.log(`getting ${key}!`)
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver)
    }
});
var obj = Object.create(p)
obj.count = 1;
++obj.count; //不触发代理器，应为obj上存在了count属性，无需再原型上访问
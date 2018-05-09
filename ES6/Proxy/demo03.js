var p = new Proxy(function (x, y) {
    return x + y;
}, {
    get(target, name, receiver) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },
    apply(target, thisBinding, args) {
        return args[0];
    },
    construct(target, args) {
        return {
            value: args[1]
        }
    }
});
p(1, 2)
new p(1, 2)
p.prototype === Object.prototype;
p.foo === 'Hello, foo'
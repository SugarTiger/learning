Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => {
            throw reason
        })
    );
};
const p1 = new Promise((resolve, reject) => {
    console.log(111)
    resolve('3333')
}).finally(() => {
    console.log('finally');
    return 222;
}).then(val => console.log(val))